import DisplayList from "./displayList";

function ManagedSection({ category, isAdding }) {
    return isAdding
        ? <div>Hello</div>
        : <DisplayList category={category}></DisplayList>
}

export default ManagedSection;
