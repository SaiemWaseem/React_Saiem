import React from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { Controller } from 'react-hook-form';

export default function RTE({ name, control, label, defaultValue = "", rules }) {
    return (
        <div className='w-full'>
            {label && <label className='inline-block mb-1 pl-1 font-medium'>{label}</label>}
            <Controller
                name={name || "content"}
                control={control}
                rules={rules}
                render={({ field: { onChange, value } }) => (
                    <Editor
                        apiKey="0lb8ovmoa592tb13a0rmoj6cdm2bbkoat4v40pefst0tv01r"
                        value={value || defaultValue}
                        onEditorChange={(content) => onChange(content)}
                        init={{
                            height: 500,
                            menubar: true,
                            plugins: [
                                "advlist",
                                "autolink",
                                "lists",
                                "link",
                                "image",
                                "charmap",
                                "preview",
                                "anchor",
                                "searchreplace",
                                "visualblocks",
                                "code",
                                "fullscreen",
                                "insertdatetime",
                                "media",
                                "table",
                                "help",
                                "wordcount"
                            ],
                            toolbar:
                                "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | code | help",
                            content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                            branding: false
                        }}
                    />
                )}
            />
        </div>
    );
}