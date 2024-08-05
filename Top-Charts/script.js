const data = [
    {
        id: 1,
        name: "In My Feeings",
        author: "Drake",
        img: "https://static01.nyt.com/images/2021/12/08/arts/06drake2/06drake2-mediumSquareAt3X.jpg",
        timesPlayed: 2089766
    },
    {
        id: 2,
        name: "I Like it",
        author: "Cardi B & Bad Bunny & J Balvin",
        img: "https://i.scdn.co/image/ab67616d0000b273a0caffda54afd0a65995bbab",
        timesPlayed: 19876578
    },
    {
        id: 3,
        name: "Better Now",
        author: "Post Malone",
        img: "https://m.media-amazon.com/images/M/MV5BZGE2NjRiNGMtNGEzYi00MDk1LThmNmYtZDU0MGMxMjQyNzYxXkEyXkFqcGdeQXVyNDg4MjkzNDk@._V1_.jpg",
        timesPlayed: 4356789
    },
    {
        id: 4,
        name: "Boo'd Up",
        author: "Ella Mai",
        img: "https://upload.wikimedia.org/wikipedia/en/a/a3/Ella_Mai_Boo%27d_Up.png",
        timesPlayed: 19876578
    },
    {
        id: 5,
        name: "Nice For What",
        author: "Brake",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf2FJWIf13b_piwGNWszaYovUBrZGcQ30KuQ&s",
        timesPlayed: 19876578
    },
    {
        id: 6,
        name: "yes Indeed",
        author: "Lil Baby & Drake",
        img: "https://i.scdn.co/image/ab67616d0000b2736cab41f8c84d6164976400d4",
        timesPlayed: 3456789
    },
    {
        id: 7,
        name: "Love Lies",
        author: "Khalid & Normani",
        img: "https://m.media-amazon.com/images/S/pv-target-images/a9a123d5b1cbc68d2d037f3bf10522faacf884b6b89e169725f9f65cdc1670c1.jpg",
        timesPlayed: 986736765
    },
    {
        id: 8,
        name: "Mine",
        author: "Bazzi",
        img: "https://i.scdn.co/image/ab67616d0000b273a5f819cee96d57ec81c2b43e",
        timesPlayed: 459860743
    },

]

let songEl = document.getElementById("song-con");

    songEl.innerHTML = data.map((item) => {
        return `
        <div class="flex items-center justify-between gap-16 song">
        <div class="flex gap-5 items-center justify-start">
            <p class="px-2 py-1 border border-gray-400 round  font-bold">${item.id}</p>
            <img class="w-[50px] h-[50px]" src=${item.img} />
            <div class="flex flex-col ">
                <p class="font-bold">${item.name}
                <p class="text-sm">${item.author}</p>
            </div>
        </div>
            <p class="text-gray-500">${item.timesPlayed.toLocaleString()}</p>
            
        </div>
        `
    }).join(" ")



 