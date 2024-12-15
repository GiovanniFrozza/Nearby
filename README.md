# 📱 Nearby App

## **Descrição**
O **Nearby App** é um aplicativo mobile de clube de benefícios, desenvolvido para encontrar cupons e vantagens próximas ao usuário. Possui navegação intuitiva e uma interface responsiva, ideal para explorar estabelecimentos parceiros.

---

## 🚀 **Funcionalidades**
- 📍 **Localização de estabelecimentos** próximos via mapa.
- 🔑 **Ativação de cupons** utilizando QR Code.
- 🗂 **Navegação por categorias** para encontrar ofertas específicas.
- ⚡ **Interface dinâmica** e modularizada.

---

## 🎨 **Design do Projeto**
O design do **Nearby App** foi desenvolvido no Figma e está disponível no link abaixo:

👉 [Acesse o Design no Figma](https://www.figma.com/design/4JZQbCri5UlAUYKdM6fhsP/NLW-Pocket-Mobile-%E2%80%A2-Nearby-(Community)-(Copy)?node-id=3-376&p=f&t=PoaeyZY4iLdkHHcG-0)

---

## 📂 **Estrutura do Projeto**

```bash
src/
├── app/
│   └── market/         # Rotas e páginas do Market
│       ├── [id].tsx    # Página dinâmica
│       ├── _layout.tsx # Layout principal
│       ├── home.tsx    # Tela inicial
│       └── index.tsx   # Página de lista principal
│
├── assets/             # Imagens e recursos
│
├── components/         # Componentes reutilizáveis
│   ├── button/         # Botões personalizados
│   ├── categories/     # Listagem de categorias
│   ├── category/       # Exibição individual
│   ├── loading/        # Indicador de carregamento
│   ├── market/         # Tela de mercado
│   ├── place/          # Detalhes do lugar
│   ├── places/         # Listagem de lugares
│   ├── Step/           # Componentes de etapas
│   ├── steps/          # Gerenciamento de passos
│   └── welcome/        # Tela de boas-vindas
│
├── services/           # Integração de APIs externas
│   └── api.ts
│
├── styles/             # Estilização do projeto
│   ├── colors.ts       # Paleta de cores
│   ├── font-family.ts  # Tipografia
│   └── theme.ts        # Tema global
│
├── utils/              # Funções utilitárias
│   └── categories-icons.ts
│
├── .gitignore          # Arquivos ignorados no Git
└── app.json            # Configuração do Expo
```

## 🛠 **Tecnologias Utilizadas**
- **React Native** (Expo)
- **TypeScript**
- **Google Maps API**
- **Styled Components**

---
