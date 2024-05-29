# html-css-flexbox-streaming
Template responsivo baseado em um serviço de streaming usando HTML semântico e CSS flexbox layout.

Para criar um template responsivo para uma plataforma de streaming com HTML semântico e CSS usando Flexbox, vamos seguir as seguintes etapas:

1. **Estruturação do HTML semântico**.
2. **Estilização básica com CSS, incluindo Flexbox**.
3. **Implementação do carrossel de imagens**.
4. **Tornar o layout responsivo**.

### 1. Estruturação do HTML Semântico

Vamos estruturar o HTML de forma semântica para melhorar a acessibilidade e a manutenção do código.

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Plataforma de Streaming</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>Minha Plataforma de Streaming</h1>
        <nav>
            <ul>
                <li><a href="#">Início</a></li>
                <li><a href="#">Lançamentos</a></li>
                <li><a href="#">Filmes</a></li>
                <li><a href="#">Séries</a></li>
                <li><a href="#">Minha Lista</a></li>
            </ul>
        </nav>
    </header>
    <section id="carrossel">
        <div class="carousel-container">
            <div class="carousel-item">
                <img src="https://via.placeholder.com/800x400" alt="Lançamento 1">
            </div>
            <div class="carousel-item">
                <img src="https://via.placeholder.com/800x400" alt="Lançamento 2">
            </div>
            <div class="carousel-item">
                <img src="https://via.placeholder.com/800x400" alt="Lançamento 3">
            </div>
        </div>
    </section>
    <main>
        <section class="filmes">
            <h2>Filmes Disponíveis</h2>
            <div class="filmes-container">
                <div class="filme-item">
                    <img src="https://via.placeholder.com/200x300" alt="Filme 1">
                    <p>Filme 1</p>
                </div>
                <div class="filme-item">
                    <img src="https://via.placeholder.com/200x300" alt="Filme 2">
                    <p>Filme 2</p>
                </div>
                <div class="filme-item">
                    <img src="https://via.placeholder.com/200x300" alt="Filme 3">
                    <p>Filme 3</p>
                </div>
                <div class="filme-item">
                    <img src="https://via.placeholder.com/200x300" alt="Filme 4">
                    <p>Filme 4</p>
                </div>
            </div>
        </section>
    </main>
    <footer>
        <p>&copy; 2024 Minha Plataforma de Streaming. Todos os direitos reservados.</p>
    </footer>
</body>
</html>
```

### 2. Estilização Básica com CSS, incluindo Flexbox

Vamos adicionar o CSS necessário para a estilização básica e o layout flexível.

```css
/* styles.css */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    background-color: #121212;
    color: #ffffff;
}

header {
    background-color: #1f1f1f;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

header h1 {
    font-size: 24px;
}

nav ul {
    list-style: none;
    display: flex;
}

nav ul li {
    margin-left: 20px;
}

nav ul li a {
    color: #ffffff;
    text-decoration: none;
}

#carrossel {
    margin: 20px 0;
    overflow: hidden;
    position: relative;
}

.carousel-container {
    display: flex;
    transition: transform 0.5s ease;
}

.carousel-item {
    min-width: 100%;
}

.carousel-item img {
    width: 100%;
    display: block;
}

main {
    padding: 20px;
}

.filmes {
    margin-top: 20px;
}

.filmes-container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
}

.filme-item {
    flex: 1 1 200px;
    text-align: center;
}

.filme-item img {
    max-width: 100%;
    border-radius: 8px;
}

footer {
    background-color: #1f1f1f;
    text-align: center;
    padding: 10px;
    position: fixed;
    width: 100%;
    bottom: 0;
}
```

### 3. Implementação do Carrossel de Imagens

Para implementar o carrossel de imagens, podemos usar JavaScript para adicionar a funcionalidade de deslizar entre as imagens.

```html
<script>
document.addEventListener('DOMContentLoaded', () => {
    const carouselContainer = document.querySelector('.carousel-container');
    let offset = 0;

    setInterval(() => {
        offset = (offset + 100) % (100 * carouselContainer.children.length);
        carouselContainer.style.transform = `translateX(-${offset}%)`;
    }, 3000);
});
</script>
```

### 4. Tornar o Layout Responsivo

Vamos garantir que o layout funcione bem em diferentes tamanhos de tela. Adicionaremos media queries no CSS para ajustar a exibição em dispositivos menores.

```css
/* styles.css */
@media (max-width: 768px) {
    header {
        flex-direction: column;
        align-items: flex-start;
    }

    nav ul {
        flex-direction: column;
        align-items: flex-start;
    }

    nav ul li {
        margin: 10px 0;
    }

    .filmes-container {
        flex-direction: column;
        align-items: center;
    }

    .filme-item {
        flex: 1 1 auto;
        width: 100%;
    }
}

@media (max-width: 480px) {
    header h1 {
        font-size: 20px;
    }

    nav ul li {
        margin-left: 10px;
    }

    .carousel-item img {
        height: auto;
    }
}
```

### Explicação do Código

#### HTML

- **`<header>`**: Contém o título e a navegação principal do site.
- **`<nav>`**: Barra de navegação com links para diferentes seções.
- **`<section id="carrossel">`**: Seção dedicada ao carrossel de imagens.
- **`<div class="carousel-container">`**: Contém os itens do carrossel.
- **`<main>`**: Conteúdo principal, contendo a lista de filmes disponíveis.
- **`<section class="filmes">`**: Seção para exibir os filmes disponíveis.
- **`<footer>`**: Rodapé do site com informações de copyright.

#### CSS

- **`*`**: Reseta margens e padding, e aplica box-sizing para bordas e padding serem inclusos nas dimensões.
- **`body`**: Define a fonte padrão e a cor de fundo.
- **`header`**: Estiliza o cabeçalho com Flexbox para espaçar elementos.
- **`nav ul`**: Estiliza a lista de navegação como flexível e horizontal.
- **`#carrossel`**: Configura o carrossel para overflow escondido e posição relativa.
- **`.carousel-container`**: Usa Flexbox para organizar os itens do carrossel em linha.
- **`.filmes-container`**: Usa Flexbox para organizar os itens de filmes de forma flexível e adaptável.
- **Media Queries**: Adapta o layout para telas menores, ajustando a flex-direction e outros estilos para melhor visualização em dispositivos móveis.

Com isso, temos um template básico de uma plataforma de streaming, responsivo e com um carrossel de imagens funcionando.