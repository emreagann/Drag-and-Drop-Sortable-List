const sortableList = document.querySelectorAll(".sortable-list");
const items = sortableList.querySelectorAll(".item");
items.forEach(()=>{
          items.addEventListener("dragstart",()=>{
                    setTimeout(() => items.classList.add("dragging"),0)
          });
          items.addEventListener("dragend",()=> items.classList.remove("dragging"));

});
const initSortableList = (e) => {
          e.preventDefault();
          const draggingItem = sortableList.querySelector(".dragging");
          const siblings = [...sortableList.querySelectorAll(".item:not(.dragging)")];
          let nextSibling = siblings.find(sibling => {
            return e.clientY <= sibling.offsetTop + sibling.offsetHeight / 2;
          });
          sortableList.insertBefore(draggingItem,nextSibling);
}
sortableList.addEventListener("dragover",initSortableList);
sortableList.addEventListener("dragenter",e => e.preventDefault());