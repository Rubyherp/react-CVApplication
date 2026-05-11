
function GenericButton({ title, fn = null, type = "button", form = null }) {
    return (
        <button
            form={form}
            type={type}
            onClick={fn}
            className="flex justify-center self-center w-32 mb-4 py-2 px-4 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-all font-medium text-sm mt-4"
        >{title}</button>
    )
}

export default GenericButton;
