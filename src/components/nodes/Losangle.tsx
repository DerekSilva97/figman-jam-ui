import { NodeResizer } from "@reactflow/node-resizer";
import { NodeProps, Handle, Position } from "reactflow";

import '@reactflow/node-resizer/dist/style.css';



export function Losangle({ selected }: NodeProps) {
    return (

        <div className="min-w-[200px] min-h-[200px]">
            <div className="min-w-[200px] min-h-[200px] bg-green-500 -rotate-45">
                <div className="h-full rotate-45">
                    <textarea
                        className="resize-none rounded-lg  p-9 w-[180px] h-[180px] h-full w-full text-lg text-zinc-200 bg-transparent focus:outline-none focus: focus:border-transparent "
                        title='teste'
                    />
                </div>
                <NodeResizer
                    minWidth={200}
                    minHeight={200}
                    isVisible={selected}
                    lineClassName="border-blue-400 "
                    handleClassName="h-3 w-3 bg-white border-2 rounded border-blue-400"
                />
                <Handle
                    id='left'
                    type="source"
                    position={Position.Left}
                    className="-left-5 w-3 h-3 bg-blue-400/80 top-auto -bottom-7"
                />
                <Handle
                    id='right'
                    type="source"
                    position={Position.Right}
                    className="-right-5 w-3 h-3 bg-blue-400/80 bottom-auto -top-4"
                />
                <Handle
                    id='top'
                    type="source"
                    position={Position.Top}
                    className="-top-5 w-3 h-3 bg-blue-400/80 right-auto -left-4"
                />
                <Handle
                    id='bottom'
                    type="source"
                    position={Position.Bottom}
                    className="-bottom-5 w-3 h-3 bg-blue-400/80 left-auto -right-6 "
                />
            </div>

        </div>
    )
}