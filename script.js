document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("actionButton");

    button.addEventListener("click", function () {
        const existingList = document.getElementById("memberList");

        // Nếu danh sách đã hiển thị thì không hiển thị lại
        if (!existingList) {
            const list = document.createElement("div");
            list.id = "memberList";
            list.style.display = "flex";
            list.style.justifyContent = "center";
            list.style.gap = "20px";
            list.style.marginTop = "20px";

            const members = [
                {
                    name: "Lê Khánh Đăng",
                    image: "img/khanhdang.png"
                },
                {
                    name: "Nguyễn Trọng Đạt",
                    image: "img/jerry.png"
                },
                {
                    name: "Mai Tuấn Đạt",
                    image: "img/tom.webp"
                }
            ];

            members.forEach(function (member) {
                const memberDiv = document.createElement("div");
                memberDiv.style.textAlign = "center";

                const img = document.createElement("img");
                img.src = member.image;
                img.alt = member.name;

                // Nếu là Lê Khánh Đăng thì ảnh lớn hơn
                if (member.name === "Nguyễn Trọng Đạt") {
                    img.style.width = "200px";
                } else {
                    img.style.width = "20px";
                }

                img.style.borderRadius = "10px";
                img.style.boxShadow = "0 0 10px rgba(0,0,0,0.1)";

                const name = document.createElement("p");
                name.textContent = member.name;
                name.style.marginTop = "10px";

                memberDiv.appendChild(img);
                memberDiv.appendChild(name);
                list.appendChild(memberDiv);
            });

            button.insertAdjacentElement("afterend", list);
        }
    });
});
