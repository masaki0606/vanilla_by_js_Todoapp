import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  createIncompreteList(inputText);
};

//未完了リストに追加する
const createIncompreteList = (text) => {
  const div = document.createElement("div");
  div.className = "list-row";

  const li = document.createElement("li");
  li.innerText = text;

  const complateButton = document.createElement("button");
  complateButton.innerText = "完了";
  complateButton.addEventListener("click", () => {
    deleteFromList(complateButton.parentNode);
    const addTarget = complateButton.parentNode;
    const text = addTarget.firstElementChild.innerText;
    addTarget.textContent = null;
    //console.log(addTarget);
    const li = document.createElement("li");
    li.innerText = text;
    const backbutton = document.createElement("button");
    backbutton.innerText = "戻す";
    backbutton.addEventListener("click", () => {
      //まずは消す(親のdivを削除)
      const deleteTarget = backbutton.parentNode;
      //deleteFromList("complete-list", deleteTarget);
      document.getElementById("complete-list").removeChild(deleteTarget);

      const text = backbutton.parentNode.firstElementChild.innerText;
      createIncompreteList(text);
    });

    addTarget.appendChild(li);
    addTarget.appendChild(backbutton);

    //完了リストに追加
    document.getElementById("complete-list").appendChild(addTarget);
  });

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    const deleteTarget = deleteButton.parentNode;
    deleteFromList(deleteTarget);
  });

  div.appendChild(li);
  div.appendChild(complateButton);
  div.appendChild(deleteButton);

  document.getElementById("incomplete-list").appendChild(div);
};

//リストから指定の要素を削除
const deleteFromList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
