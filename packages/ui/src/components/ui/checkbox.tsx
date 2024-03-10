interface text {
  text: string
}
function Checkbox(props: text) {
  return (
    <label className="font-amsi-regular text-white my-4 flex  items-center gap-x-3 container mx-auto justify-center relative rounded-full cursor-pointer underline text-xs px-1">
      <div className="relative flex items-center">
        <input
          type="checkbox"
          className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-[#808080] transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-[#808080] checked:bg-[#9dff65] checked:before:bg-[#69ff69] hover:before:opacity-10"
          id="checkbox"
        />
        <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3.5 w-3.5"
            viewBox="0 0 20 20"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="1"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </div>
      <p className="text-[#808080] text-[15px]">{props.text}</p>
    </label>
  )
}
export default Checkbox
