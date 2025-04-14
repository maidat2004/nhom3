
document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("actionButton");

    button.addEventListener("click", function () {
        const existingList = document.getElementById("memberList");

        // Nếu danh sách đã hiển thị thì không hiển thị lại
        if (!existingList) {
            const list = document.createElement("ul");
            list.id = "memberList";

            const members = [
                "Lê Khánh Đăng",
                "Nguyễn Trọng Đạt",
                "Mai Tuấn Đạt"
            ];

            members.forEach(function (name) {
                const listItem = document.createElement("li");
                listItem.textContent = name;
                list.appendChild(listItem);
            });

            button.insertAdjacentElement("afterend", list);
        }
    });
});
