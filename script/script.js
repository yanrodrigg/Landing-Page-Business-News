window.onload = function() {
    // Menu do HEADER no modo MOBILE
    var linkMenu = document.getElementById("linkMenu");
    var menuMobile = document.getElementById("menuMobile");
    var linkMenuMobile = document.querySelectorAll("#menuMobile a")

    linkMenu.addEventListener("click", showMenu);

    function showMenu() {
        if(menuMobile.style.display === "none"){
            menuMobile.style.display = "flex"
        } else{
            menuMobile.style.display = "none"
        }
    }

    linkMenuMobile.forEach( link => {
        link.addEventListener("click", () => {
            menuMobile.style.display = "none"
        });
    });

    //Imprimir dados do formulário
    var nome = document.getElementById("nome");
    var email = document.getElementById("email");
    var nomeDaEmpresa = document.getElementById("nomeDaEmpresa");
    var comentario = document.getElementById("comentario");
    var formSubmit = document.getElementById("formSubmit");

    formSubmit.addEventListener("click", () => {
        alert("DADOS CADASTRADOS!\nNome: " + nome.value+ "\nEmail: " +
        email.value + "\nEmpresa: " + nomeDaEmpresa.value + "\nMensagem: " +
        comentario.value);
    });

    //Imprimir dados da newsletter
    var footerEmail = document.getElementById("footerEmail");
    var footerBtn = document.getElementById("footerBtnSubmit");

    footerBtn.addEventListener("click", () => {
        alert("VOCÊ ESTÁ CADASTRADO\nNA NOSSA NEWSLETTER!\nEmail: " + footerEmail.value);
    });

    //Carrossel de depoimentos
    //Usuários:
    const users=[
        {
            nome:"Sara Oliveira",
            empresa:"CEO Tech Solutions",
            img:"img/fotoPerfil1.png",
            depoimento:"Gostaria de expressar minha gratidão à equipe da Business News pelo incrível aplicativo de notícias que eles desenvolveram. Desde que comecei a usá-lo, tenho me mantido atualizada com as últimas notícias relacionadas ao meu setor de negócios, o que me permitiu tomar decisões mais informadas e estratégicas. Além disso, o aplicativo é intuitivo e fácil de usar, o que o torna uma ferramenta indispensável para a minha empresa."
        },
        {
            nome:"Isaque Mendes",
            empresa:"Agência Z-Generation",
            img:"img/fotoPerfil2.png",
            depoimento:"Eu sou um usuário assíduo do aplicativo de notícias da Business News e estou absolutamente amando a experiência. Como social media, meu trabalho exige que eu esteja sempre atualizado com as últimas notícias e tendências, e o aplicativo tem sido uma ferramenta extremamente valiosa para mim. A interface é fácil de usar e a navegação é intuitiva, o que torna a busca por informações específicas uma tarefa simples e rápida."
        },
        {
            nome:"Ariel Marques",
            empresa:"NewCoins Contabilidade",
            img:"img/fotoPerfil3.png",
            depoimento:"O que mais me impressiona é a agilidade com que o aplicativo atualiza suas notícias, garantindo que eu esteja sempre por dentro do que está acontecendo em tempo real. Com isso, consigo planejar melhor minhas estratégias de gestão, trazendo conteúdo relevante e engajador para minha equipe. Em resumo, o aplicativo de notícias da Business News tem sido uma ferramenta fundamental para o meu trabalho como gestora."
        }
    ];

    var userName = document.getElementById("userName");
    var userCompany = document.getElementById("userCompany");
    var userComment = document.getElementById("userComment");
    var userImg = document.getElementById("userImg");

    var btnLeft = document.getElementById("btnLeft");
    var btnRight = document.getElementById("btnRight");

    btnRight.addEventListener("click", nextUser);
    btnLeft.addEventListener("click", prevUser);

    var currentUserIndex = 0

    function nextUser() {
        currentUserIndex = (currentUserIndex + 1) % users.length;
        changeUsersContent(currentUserIndex);
    }

    function prevUser() {
        currentUserIndex = currentUserIndex == 0 ? users.length - 1 : (currentUserIndex - 1) % users.length;
        changeUsersContent(currentUserIndex);
    }

    function changeUsersContent(userIndex) {
        userName.innerText = users[userIndex].nome;
        userCompany.innerText = users[userIndex].empresa;
        userComment.innerText = users[userIndex].depoimento;
        userImg.src = users[userIndex].img;
    }
};