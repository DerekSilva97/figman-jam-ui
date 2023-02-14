import { NodeResizer } from "@reactflow/node-resizer";
import { NodeProps, Handle, Position } from "reactflow";
import '@reactflow/node-resizer/dist/style.css';


export function Square({ selected }: NodeProps) {
    return (
        <div className="bg-violet-500 w-full h-full rounded min-w-[200px] min-h-[200px] overflow-hidden">
            <div className="h-full">
                <textarea
                    className="resize-none rounded-lg  p-4 min-w-[180px] min-h-[180px] h-full w-full text-lg text-zinc-200 bg-transparent focus:outline-none focus: focus:border-transparent "
                    title='teste'
                />
            </div>
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
                position={Position.Left}
                className="-left-5 w-3 h-3 bg-blue-400/80"
            />
            <Handle
                id='right'
                type="source"
                position={Position.Right}
                className="-right-5 w-3 h-3 bg-blue-400/80"
            />
            <Handle
                id='top'
                type="source"
                position={Position.Top}
                className="-top-5 w-3 h-3 bg-blue-400/80"
            />
            <Handle
                id='bottom'
                type="source"
                position={Position.Bottom}
                className="-bottom-5 w-3 h-3 bg-blue-400/80"
            />
        </div>
    )
}