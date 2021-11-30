const blogEntries = [{
    "Image": "/images/logo.png",
    "Buzzword": "My own blog",
    "Title": "I start my first own blog",
    "Text": "Eu in culpa aliqua irure tempor eu cupidatat do pariatur eiusmod duis exercitation. Ullamco eiusmod labore aute occaecat incididunt tempor anim Lorem nostrud qui Lorem exercitation ad. Labore ex ullamco amet cupidatat. Amet enim ipsum amet excepteur id cillum consectetur voluptate fugiat irure deserunt veniam eiusmod occaecat. Aliqua id nulla quis consectetur veniam amet minim.",
    "Editor": "Martin Lange",
    "Date": "2021-10-10",
}, {
    "Image": "/images/me-none.png",
    "Buzzword": "Me from triangles",
    "Title": "Little program making polygon images",
    "Text": "Ex pariatur veniam ad laborum minim mollit pariatur ex consectetur dolore consequat nisi incididunt. Cupidatat voluptate ea ipsum voluptate enim aliqua qui. Quis Lorem nisi non sunt qui. Id nulla id ex id qui quis consequat. Pariatur in consectetur labore labore id tempor. Et laboris ullamco excepteur veniam ea consequat quis. Labore anim dolore nostrud ex sunt incididunt voluptate.",
    "Editor": "John Doe",
    "Date": "2021-10-19",
}, {
    "Image": "/images/roof-terrace.png",
    "Buzzword": "Roof terrace",
    "Title": "This is the roof terrace where I'm working",
    "Text": "Quis pariatur quis cupidatat commodo cupidatat labore adipisicing veniam esse sit voluptate tempor aute. In minim laborum reprehenderit nulla fugiat cillum aliqua aliquip sit deserunt. Anim quis eu excepteur veniam non ullamco incididunt in. Esse non eu sit esse. Consectetur culpa reprehenderit officia eiusmod eu culpa magna. Voluptate dolor do laboris occaecat minim cillum aute consequat laborum nulla labore pariatur.",
    "Editor": "Marie Wonder",
    "Date": "2021-10-26",
}];

const initBlogEntries = () => {
    let cnt = document.getElementById('content');

    let entriesTxt = blogEntries.reduce((prev, curr) => {
        const imagePart =
            `    <div class="blog-entry-image">` +
            `        <img src="${curr.Image}" width="200">` +
            `    </div>`;
        const textPart =
            `    <div class="blog-entry-text">` +
            `        <H2>${curr.Title}</H2>` +
            `        <p>${curr.Text}</p>` +
            `        <p>${curr.Editor} - ${curr.Date}</p>` +
            `    </div>`;
        const even = blogEntries.indexOf(curr) % 2 == 0;
        return prev +
            (even ?
                `<div class="blog-entry blog-entry-even" id="${curr.Buzzword}">${imagePart}${textPart}</div>` :
                `<div class="blog-entry" id="${curr.Buzzword}">${textPart}${imagePart}</div>`)
    }, "");
    cnt.innerHTML = entriesTxt;
    console.log("Blog entries loaded.");
}

const initTablesOfContent = () => {
    let allTablesOfContent = document.getElementsByClassName("content-list");
    console.log(allTablesOfContent);

    // clear all tables of content and re-create from json
    for (let ulElem of allTablesOfContent) {
        ulElem.innerHTML = "";
        blogEntries.forEach(entry => {
            var link = document.createElement("a");
            link.setAttribute("href", `#${entry.Buzzword}`);
            var liElem = document.createElement("li");
            var liText = document.createTextNode(entry.Buzzword);
            link.appendChild(liText);
            liElem.appendChild(link);
            ulElem.appendChild(liElem);
        });
    };
}

initBlogEntries();
initTablesOfContent();