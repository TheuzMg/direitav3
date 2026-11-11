# Rumos da Liberdade — Projeto Escolar de Ciências Humanas

Site interativo sobre a **origem, os princípios e as correntes da direita política democrática**, desenvolvido como trabalho interdisciplinar de **História, Sociologia e Filosofia Política** (Ensino Médio).

O projeto é feito só com **HTML, CSS e JavaScript puros**, sem frameworks nem bibliotecas externas (apenas as fontes do Google Fonts).

---

## 👥 Integrantes do grupo

1. Matheus de Oliveira Antunes Pinto
2. Arthur Mendes de Paula Lopes
3. Alice da Mata Nascimento
4. Kauã Henrique Gonçalves Silva
5. Gabriela de Aguiar Reis
6. Geovanna Carolyne de Jesus
7. Cauã Marques Santos
8. Tarsila Nunes Pedrosa
9. Cauan Vinícius Figueredo
10. Isadora Cristinny Balbino Carmo
11. Daniel Muniz Oliveira
12. Filipe Roberto Brito Silva

---

## 🎯 Ideia do trabalho

Em vez de começar com um texto teórico, o site **primeiro mostra uma situação do dia a dia** (a história em quadrinhos) e **só depois explica as ideias** que estão por trás dela (o portal). Assim, o conteúdo parte de algo que a pessoa consegue enxergar na vida real e depois chega à teoria.

## 🧭 Como o site funciona

O site tem **duas etapas**, ambas no mesmo `index.html`:

### Etapa 1 — História em quadrinhos (HQ)
- Uma HQ de **6 páginas** que acompanha uma jovem trabalhadora: rotina e contas, burocracia para empreender, curso de qualificação, abertura do próprio negócio, ruas seguras à noite e a conclusão.
- **Navegação:** botões *Anterior* e *Próxima*, bolinhas de progresso no topo, clique na imagem para avançar, setas ← → do teclado e deslize (*swipe*) no celular.
- Na **última página** aparecem dois botões:
  - **"Saiba mais sobre essas ideias"**: faz uma transição animada e abre o portal.
  - **"Veja um vídeo sobre o tema"**: abre uma janela (modal) com o vídeo. Ele fecha pelo X, clicando fora ou com a tecla `Esc`, e pausa ao fechar.

### Etapa 2 — Portal de conteúdo
Menu fixo no topo (com versão para celular) e as seguintes seções:

| Seção | O que mostra |
|---|---|
| **Início** | Apresentação do tema e números-resumo |
| **Origem Histórica** | Assembleia Francesa (1789), Iluminismo, Burke e linha do tempo |
| **Princípios** | 13 cards clicáveis, cada um com explicação teórica e exemplo do cotidiano |
| **Argumentos** | 10 argumentos, cada um ligado a uma página da HQ e com "limites e nuances" |
| **Direita no Brasil** | Trajetória histórica e as correntes atuais |
| **Conquistas** | Contribuições ao progresso institucional e econômico |
| **Mitos & Verdades** | 10 perguntas em formato de acordeão (abre e fecha) |
| **Futuro** | Propostas para educação, trabalho, economia, segurança etc. |
| **Fontes** | Legislação, obras de referência e instituições consultadas |

Em qualquer ponto do portal há o botão **"Voltar à História em Quadrinhos"**, que leva de volta à página 1 da HQ. Também dá para abrir direto uma página pelo endereço, por exemplo `index.html#page3`.

---

## 📐 Critérios usados para construir o site

1. **Conteúdo fiel e com fontes.** Todo o conteúdo é baseado em autores clássicos (Locke, Adam Smith, Burke, Tocqueville, Hayek, Roberto Campos), na Constituição de 1988 e em leis brasileiras. Tudo está listado na seção *Fontes*.
2. **Diferenciar direita democrática de extremismo.** O site deixa claro que a direita não é um bloco único e que o autoritarismo é rejeitado em qualquer lado do espectro político.
3. **Honestidade intelectual.** Cada argumento tem uma nota de *limites e nuances*, e a seção de mitos apresenta respostas equilibradas, sem tratar a visão do grupo como verdade absoluta.
4. **Narrativa antes da teoria.** A HQ vem primeiro e cada argumento do portal aponta a página da HQ que o exemplifica.
5. **Linguagem acessível.** Textos explicativos, exemplos do cotidiano e cards que o leitor expande só se quiser aprofundar.
6. **Identidade visual brasileira.** Fundo com a bandeira do Brasil desfocada, em camadas com degradê azul-petróleo para manter a leitura. Cores principais: azul-marinho, verde e dourado. Fontes *Plus Jakarta Sans* e *Inter*.
7. **Responsividade.** O layout se adapta a computador, tablet e celular, com menu hambúrguer e navegação por toque.
8. **Acessibilidade.** Textos alternativos nas imagens, atributos ARIA, navegação por teclado, foco visível nos cards e respeito à preferência de *movimento reduzido* do sistema.
9. **Simplicidade técnica.** Só HTML, CSS e JavaScript puros, com todos os arquivos na mesma pasta, o que facilita abrir, entender e publicar.

---

## 📁 Arquivos do projeto

- `index.html`, `style.css`, `script.js`: o site
- `comic_page_01.png` a `comic_page_06.png`: páginas da HQ
- `bandeira-brasil.png`: imagem do fundo
- `video-sobre-as-ideias.mp4` e `poster.jpg`: vídeo e capa
- `gemini.md`: este arquivo de documentação

## 🚀 Como usar

- **Localmente:** abra o `index.html` no navegador.
- **Publicar no GitHub Pages:** GitHub → *Settings* → *Pages* → branch `main`, pasta `/ (root)`.
