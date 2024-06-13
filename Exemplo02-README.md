# WeatherApp

WeatherApp é um aplicativo simples que fornece previsões meteorológicas precisas para qualquer cidade do mundo.

## Índice

- [Instalação](#instalação)
- [Uso](#uso)
- [Configuração](#configuração)
- [Contribuição](#contribuição)
- [Licença](#licença)
- [Autores](#autores)
- [Agradecimentos](#agradecimentos)

## Instalação

Para instalar e executar o WeatherApp, siga estas etapas:

1. Clone o repositório para o seu ambiente local:

    ```bash
    git clone https://github.com/seu-usuario/WeatherApp.git
    cd WeatherApp
    ```

2. Crie e ative um ambiente virtual:

    ```bash
    python -m venv env
    source env/bin/activate  # No Windows use `env\Scripts\activate`
    ```

3. Instale as dependências necessárias:

    ```bash
    pip install -r requirements.txt
    ```

## Uso

Para usar o WeatherApp, execute o seguinte comando:

```bash
python main.py --city "Nome da Cidade"
```

Exemplo de saída:

```plaintext
Previsão do tempo para Nome da Cidade:
- Segunda-feira: 20°C, Parcialmente Nublado
- Terça-feira: 22°C, Ensolarado
- Quarta-feira: 18°C, Chuva
```

## Configuração

Você pode configurar o WeatherApp usando um arquivo de configuração `config.json` no diretório raiz do projeto. Exemplo de `config.json`:

```json
{
    "api_key": "sua_chave_api",
    "default_city": "São Paulo"
}
```

## Contribuição

Contribuições são bem-vindas! Siga os passos abaixo para contribuir:

1. Faça um fork do projeto
2. Crie uma nova branch (`git checkout -b feature/nova-funcionalidade`)
3. Commit suas mudanças (`git commit -am 'Adiciona nova funcionalidade'`)
4. Envie para a branch (`git push origin feature/nova-funcionalidade`)
5. Crie um novo Pull Request

Por favor, assegure-se de que seu código segue nossos padrões de codificação e inclui testes apropriados.

## Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## Autores

- **João Silva** - *Trabalho Inicial* - [joaosilva](https://github.com/joaosilva)
- **Maria Oliveira** - *Desenvolvimento* - [mariaoliveira](https://github.com/mariaoliveira)

## Agradecimentos

- Agradecemos ao [OpenWeatherMap](https://openweathermap.org/) pelo fornecimento das APIs de dados meteorológicos.
- Agradecimento especial a todos os contribuidores do projeto.
```
