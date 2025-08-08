import conf from '../conf/conf.js';
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service {
    client = new Client();
    databases;
    bucket;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({ title, slug, content, featuredimage, status, userId }) {
        try {
            console.log("Creating post with data:", { title, slug, content, featuredimage, status, userId });
            const response = await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                ID.unique(), // Use unique ID instead of slug
                {
                    title,
                    slug,
                    content,
                    featuredimage, // Use lowercase to match schema
                    status,
                    userId,
                }
            );
            console.log("Create post response:", response);
            return response;
        } catch (error) {
            console.error("Appwrite service :: createPost :: error", {
                message: error.message,
                code: error.code,
                type: error.type,
                response: error.response
            });
            throw error; // Propagate error to PostForm
        }
    }

    async updatePost(postId, { title, slug, content, featuredimage, status }) {
        try {
            console.log("Updating post with data:", { postId, title, slug, content, featuredimage, status });
            const response = await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                postId, // Use postId instead of slug
                {
                    title,
                    slug,
                    content,
                    featuredimage, // Use lowercase to match schema
                    status,
                }
            );
            console.log("Update post response:", response);
            return response;
        } catch (error) {
            console.error("Appwrite service :: updatePost :: error", {
                message: error.message,
                code: error.code,
                type: error.type,
                response: error.response
            });
            throw error; // Propagate error to PostForm
        }
    }

    async deletePost(postId) {
        try {
            console.log("Deleting post:", postId);
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                postId
            );
            console.log("Post deleted successfully");
            return true;
        } catch (error) {
            console.error("Appwrite service :: deletePost :: error", {
                message: error.message,
                code: error.code,
                type: error.type,
                response: error.response
            });
            throw error; // Propagate error
        }
    }

    async getPost(postId) {
        try {
            console.log("Fetching post:", postId);
            const response = await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                postId
            );
            console.log("Get post response:", response);
            return response;
        } catch (error) {
            console.error("Appwrite service :: getPost :: error", {
                message: error.message,
                code: error.code,
                type: error.type,
                response: error.response
            });
            throw error; // Propagate error
        }
    }

    async getPosts(queries = [Query.equal("status", "active")]) {
        try {
            console.log("Fetching posts with queries:", queries);
            const response = await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries
            );
            console.log("Get posts response:", response);
            return response;
        } catch (error) {
            console.error("Appwrite service :: getPosts :: error", {
                message: error.message,
                code: error.code,
                type: error.type,
                response: error.response
            });
            throw error; // Propagate error
        }
    }

    async uploadFile(file) {
        try {
            console.log("Uploading file:", file.name);
            const response = await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            );
            console.log("Upload file response:", response);
            return response;
        } catch (error) {
            console.error("Appwrite service :: uploadFile :: error", {
                message: error.message,
                code: error.code,
                type: error.type,
                response: error.response
            });
            throw error; // Propagate error
        }
    }

    async deleteFile(fileId) {
        try {
            console.log("Deleting file:", fileId);
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            );
            console.log("File deleted successfully");
            return true;
        } catch (error) {
            console.error("Appwrite service :: deleteFile :: error", {
                message: error.message,
                code: error.code,
                type: error.type,
                response: error.response
            });
            throw error; // Propagate error
        }
    }

    getFilePreview(fileId) {
        try {
            console.log("Generating file preview for:", fileId);
            const url = this.bucket.getFilePreview(
                conf.appwriteBucketId,
                fileId
            ).href;
            console.log("File preview URL:", url);
            return url;
        } catch (error) {
            console.error("Appwrite service :: getFilePreview :: error", {
                message: error.message,
                code: error.code,
                type: error.type,
                response: error.response
            });
            throw error; // Propagate error
        }
    }
}

const service = new Service();
export default service;