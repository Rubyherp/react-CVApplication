import DisplayList from "./displayList";
import DisplayForm from "./displayForm";

function ManagedSection({ category, isAdding }) {
    return isAdding
        ? <DisplayForm category={category}></DisplayForm>
        : <DisplayList category={category}></DisplayList>
}

export default ManagedSection;
