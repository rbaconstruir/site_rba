# Site RBA

## Index

- [Site RBA](#site-rba)
  - [Index](#index)
  - [Visao Geral](#visao-geral)
  - [Objetivos](#objetivos)
    - [1. Website](#1-website)
    - [2. Aplicacao de Picagem](#2-aplicacao-de-picagem)
    - [3. Formularios](#3-formularios)
  - [Ferramentas](#ferramentas)
  - [Formas](#formas)
    - [Cores](#cores)
    - [Gradientes Exemplos](#gradientes-exemplos)
    - [Fonts](#fonts)
  - [Estado Atual](#estado-atual)
  - [Exemplos de bash commands](#exemplos-de-bash-commands)
    - [1. Atualizar o repo local](#1-atualizar-o-repo-local)
    - [2. Fazer commits](#2-fazer-commits)
    - [3. Aplicar alteracao](#3-aplicar-alteracao)

## Visao Geral

O repositorio serve para reunir o trabalho desenvolvido.

Serve tambem para colecionar os requisitos e o ambito dos projetos.

## Objetivos

### 1. Website

- Implementacao e personalizacao de um website no Hostinger utilizando o WordPress
- Organizacao de conteudos e estrutura do site
- Base para futuras atualizacoes

### 2. Aplicacao de Picagem

- Sistema simples para registar:
  - Hora de entrada
  - Inicio/Fim de pausas
  - Hora de saida
- Facil e intuitivo
- Compatibilidade com dispositivos moveis

### 3. Formularios

- Criacao de Microsoft Forms
- Perguntas para colaboradores

## Ferramentas

- WordPress
- MySQL
- HTML/CSS/JavaScript
- GitHub
- Kivy

## Formas

### Cores

- ![#f03c15](https://placehold.co/15x15/f46415/f46415.png) `#f46415` (Orange)
- ![#f03c15](https://placehold.co/15x15/55315b/55315b.png) `#55315b` (Purple)

| Token               | Valor HSL          | Utilização                        |
|---------------------|--------------------|-----------------------------------|
| `--primary-glow`    | `20 78% 65%`       | Laranja claro — hovers, gradientes|
| `--primary`         | `20 78% 55%`       | Laranja — cor principal, CTAs     |
| `--secondary`       | `270 30% 30%`      | Roxo/púrpura — fundos escuros     |
| `--background`      | `0 0% 98%`         | Branco off-white — fundo geral    |
| `--foreground`      | `270 25% 15%`      | Texto escuro                      |
| `--muted`           | `20 10% 94%`       | Cinza claro — fundos suaves       |
| `--muted-foreground`| `270 15% 40%`      | Texto secundário                  |

### Gradientes Exemplos

```css
--gradient-hero: linear-gradient(135deg, hsl(20 78% 55%) 0%, hsl(30 85% 50%) 100%);
--gradient-dark: linear-gradient(135deg, hsl(270 30% 20%) 0%, hsl(270 30% 30%) 100%);
--gradient-overlay: linear-gradient(180deg, hsla(270 30% 15% / 0.7) 0%, hsla(270 30% 15% / 0.9) 100%);
```

### Fonts

|Nome           | Utilizacao            |
|---------------|-----------------------|
|Gotham         | Logo - Subtitulo      |
|League Spartan | Logo - Titulo         |
|Monserrat      | Canva - Marca         |

## Estado Atual

- Fase de pesquisa e analise
- Compreensao do ambiente e estrutura do projeto
- Avaliacao de solucoes existentes
- Definicao gradual dos requisitos

## Exemplos de bash commands

### 1. Atualizar o repo local

```bash
git pull
```

### 2. Fazer commits

```bash
git commit -m "Descricao da alteracao"
```

### 3. Aplicar alteracao

```bash
git push
```
