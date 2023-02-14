import { NodeResizer } from "@reactflow/node-resizer";
import { NodeProps, Handle, Position } from "reactflow";

import '@reactflow/node-resizer/dist/style.css';



export function Triangle({ selected }: NodeProps) {
    return (
        
        <div className="min-w-[200px] min-h-[200px] border-x-[100px] border-x-transparent border-b-[200px] border-b-indigo-500">
            <NodeResizer
                minWidth={200}
                minHeight={200}
                isVisible={selected}
                lineClassName="border-blue-400"
                handleClassName="h-3 w-3 bg-white border-2 rounded border-blue-400"
            />
            <Handle
                id='left'
                type="source"
                position={Position.Bottom}
                className="-left-4 w-3 h-3 bg-blue-400/80 "
            />
            <Handle
                id='top'
                type="source"
                position={Position.Top}
                className="-top-5 w-3 h-3 bg-blue-400/80"
            />
             <Handle
                id='right'
                type="source"
                position={Position.Bottom}
                className="-right-6 w-3 h-3 bg-blue-400/80 left-auto"
            />
           
        </div>
    )
}