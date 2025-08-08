import React, { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Input, RTE, Select } from "..";
import appwriteService from "../../appwrite/config";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function PostForm({ post }) {
    const { register, handleSubmit, watch, setValue, control, getValues, formState: { errors } } = useForm({
        defaultValues: {
            title: post?.title || "",
            slug: post?.$id || "",
            content: post?.content || "",
            status: post?.status || "active",
        },
    });

    const navigate = useNavigate();
    const userData = useSelector((state) => state.auth.userData);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const submit = async (data) => {
        console.log("Form data:", data);
        setError("");
        setLoading(true);
        try {
            if (!userData?.$id) {
                throw new Error("User not authenticated. Please log in.");
            }

            if (post) {
                // Update existing post
                const file = data.image[0] ? await appwriteService.uploadFile(data.image[0]) : null;

                if (file) {
                    await appwriteService.deleteFile(post.featuredImage);
                }

                const dbPost = await appwriteService.updatePost(post.$id, {
                    ...data,
                    featuredimage: file ? file.$id : post.featuredImage, // Use lowercase to match schema
                });

                if (dbPost) {
                    navigate(`/post/${dbPost.$id}`);
                } else {
                    setError("Failed to update post. Please try again.");
                }
            } else {
                // Create new post
                if (!data.image[0]) {
                    throw new Error("Please upload a featured image.");
                }

                const file = await appwriteService.uploadFile(data.image[0]);
                if (!file || !file.$id) {
                    throw new Error("Failed to upload featured image.");
                }

                const fileId = file.$id;
                const dbPost = await appwriteService.createPost({
                    ...data,
                    featuredimage: fileId, // Use lowercase to match schema
                    userId: userData.$id,
                });

                if (dbPost) {
                    navigate(`/post/${dbPost.$id}`);
                } else {
                    throw new Error("Failed to create post. No response from server.");
                }
            }
        } catch (err) {
            console.error("Submit error:", {
                message: err.message,
                code: err.code,
                type: err.type,
                response: err.response
            });
            if (err.code === 400) {
                setError("Invalid post data. Please check all required fields (e.g., featured image) and try again.");
            } else if (err.code === 401) {
                setError("Permission denied. Please check your login status or collection permissions.");
            } else {
                setError(err.message || "An error occurred while creating/updating the post. Please try again.");
            }
        } finally {
            setLoading(false);
        }
    };

    const slugTransform = useCallback((value) => {
        if (value && typeof value === "string") {
            return value
                .trim()
                .toLowerCase()
                .replace(/[^a-zA-Z\d\s]+/g, "-")
                .replace(/\s/g, "-");
        }
        return "";
    }, []);

    React.useEffect(() => {
        const subscription = watch((value, { name }) => {
            if (name === "title") {
                setValue("slug", slugTransform(value.title), { shouldValidate: true });
            }
        });

        return () => subscription.unsubscribe();
    }, [watch, slugTransform, setValue]);

    return (
        <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
            <div className="w-2/3 px-2">
                <Input
                    label="Title :"
                    placeholder="Title"
                    className="mb-4"
                    {...register("title", { required: "Title is required" })}
                />
                {errors.title && <p className="text-red-600 text-sm mb-4">{errors.title.message}</p>}
                <Input
                    label="Slug :"
                    placeholder="Slug"
                    className="mb-4"
                    {...register("slug", { required: "Slug is required" })}
                    onInput={(e) => {
                        setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
                    }}
                />
                {errors.slug && <p className="text-red-600 text-sm mb-4">{errors.slug.message}</p>}
                <RTE
                    label="Content :"
                    name="content"
                    control={control}
                    defaultValue={getValues("content") || ""}
                    rules={{ required: "Content is required" }}
                />
                {errors.content && <p className="text-red-600 text-sm mb-4">{errors.content.message}</p>}
            </div>
            <div className="w-1/3 px-2">
                <Input
                    label="Featured Image :"
                    type="file"
                    className="mb-4"
                    accept="image/png, image/jpg, image/jpeg, image/gif"
                    {...register("image", { required: !post && "Featured image is required" })}
                />
                {errors.image && <p className="text-red-600 text-sm mb-4">{errors.image.message}</p>}
                {post && post.featuredImage && (
                    <div className="w-full mb-4">
                        <img
                            src={appwriteService.getFilePreview(post.featuredImage)}
                            alt={post.title}
                            className="rounded-lg"
                        />
                    </div>
                )}
                <Select
                    options={["active", "inactive"]}
                    label="Status"
                    className="mb-4"
                    {...register("status", { required: "Status is required" })}
                />
                {errors.status && <p className="text-red-600 text-sm mb-4">{errors.status.message}</p>}
                {error && <p className="text-red-600 mb-4 text-center">{error}</p>}
                <Button
                    type="submit"
                    bgColor={post ? "bg-green-500" : undefined}
                    className="w-full"
                    disabled={loading}
                >
                    {loading ? "Submitting..." : post ? "Update" : "Submit"}
                </Button>
            </div>
        </form>
    );
}