# Técnico

:::info
**Modulo**: Integrações

**Objetivo**: Capacitar o usuário para a instalação e utilização da integração com o Pieta.
:::

---

Para a atualização de status e/ou informações de pagamento, o sistema utiliza-se da tabela INPEDIDOALT, o qual possuirá dados sobre o pedido de origem e destino, e as tratativas do que será alterado via as colunas “CHAVE” e “VALOR”.

Atualmente há tratativas para 2 chaves, sendo elas, STATUS e PAGAMENTO.

Para a atualização de status bastará informar a data da alteração, a chave: STATUS e o VALOR será o código “ORDEM” no Pieta.

Já para a chave “PAGAMENTO”, o valor será um Json com a seguinte estrutura:

```json
{
  "status": "pagamento cancelado",
  "type": "pix",
  "condition": "à vista",
  "description": "descricao",
  "attachments": [
	  {
		  "type": "application/pdf",
		  "file": "array_de_byte",
		  "fileName": "nome_do_arquivo"
		},
		{
		  "type": "application/pdf",
		  "file": "array_de_byte",
		  "fileName": "nome_do_arquivo"
		},
	]
}
```

Sendo o status os definidos pela API do Pieta, e atualmente sendo disponibilizados os seguintes status:

'aguardando envio', 'pagamento enviado', 'pagamento recebido', 'pagamento cancelado’

E os Attachments, podem possuir no máximo 5 arquivos vinculados.

---