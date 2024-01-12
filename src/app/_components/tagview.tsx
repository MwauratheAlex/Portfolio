"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { api } from "~/trpc/react";

   
type Tag = {
    id: string;
    name: string | null;
  };

  const TagView = (props: {tag: Tag}) => {
    const router = useRouter();
    const [editing, setEditing] = useState(false);
    const [tag, setTag] = useState(props.tag.name ?? "")
    const updateTag = api.tag.update.useMutation({
        onSuccess: () => {
            router.refresh();
        }
    });
    const deleteTag = api.tag.delete.useMutation({
        onSuccess: () => {
            router.refresh();
        }
    });
    
    const handleEdit = () => {
        if (editing) {
            updateTag.mutate({
                id: props.tag.id,
                name: tag
            })
        }
        setEditing(!editing)
    }
    const handleDelete = () => {
        deleteTag.mutate({id: props.tag.id})
    }

    return (
      <div className="grid grid-cols-2 gap-4 mb-4">
        <input type="text"
            className="w-full rounded-full px-4 py-2 text-black"
            disabled={!editing}
            value={tag}
            onChange={(e) => setTag(e.target.value)}
        />
        <div className="flex gap-8">
            <button
                className="bg-cyan-500 px-4 py-2 rounded-md"
                onClick={handleEdit}>
                    {editing ? "Save" : "Edit"}
            </button>
            <button 
                className="bg-red-500 px-4 py-2 rounded-md"
                onClick={handleDelete}
            >
                    delete
            </button>
        </div>
      </div>
    );
  }

  export default TagView;