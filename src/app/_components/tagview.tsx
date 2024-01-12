"use client";
import { useState } from "react";
import { api } from "~/trpc/react";

   
type Tag = {
    id: string;
    name: string | null;
  };

  type Inputs = {
    title: string
    titleRequired: string
  }
  const TagView = (props: {tag: Tag}) => {
    const [editing, setEditing] = useState(false);
    const [tag, setTag] = useState(props.tag.name || "")
    const updateTag = api.tag.update.useMutation()
    
    const handleEdit = () => {
        if (editing) {
            updateTag.mutate({
                id: props.tag.id,
                name: tag
            })
        }
        setEditing(!editing)
    }
    return (
      <li key={props.tag.id} className="grid grid-cols-2 gap-4 mb-4">
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
            <button className="bg-red-500 px-4 py-2 rounded-md">delete</button>
        </div>
      </li>
    );
  }

  export default TagView;