import { NodeResizer } from "@reactflow/node-resizer";
import { NodeProps, Handle, Position } from "reactflow";
import '@reactflow/node-resizer/dist/style.css';


export function Circle({selected}: NodeProps){
    return(
        <div className="bg-blue-500 w-full h-full rounded-full min-w-[200px] min-h-[200px] ">
             <div className="h-full w-full rounded-full">
                <textarea
                    className="resize-none rounded-full p-8 w-[200px] h-[200px] h-full w-full text-lg text-zinc-200 bg-transparent focus:outline-none focus: focus:border-transparent "
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
            id ='top' 
            type="source" 
            position={Position.Top}
            className="-top-5 w-3 h-3 bg-blue-400/80 "
            />
            <Handle 
            id ='bottom'
            type="source"
            position={Position.Bottom}
            className="-bottom-5 w-3 h-3 bg-blue-400/80"
            />
        </div>
    )
}