# foundation-algorithms-javascript

## Data Structures

- Array
- Stack
- Queue
- Priority Queue
- Linked List
- Doubly Linked List
- Set
- Dictionary
- Hash Table
- Three

## Algorithms

- Dec2Bin (Stack)
- Dec2Base (Stack)
- HotPotato (Circular Queue)

## Notes

### Linked List

Lista ligada é uma coleção sequencial de elementos mas, diferente dos arrays, não são alocados de forma contígua na memória. Cada elemento é constituído de um nó, que armazena tanto o valor como uma referência ao próximo elemento (ponteiro).

### Doubly Linked List

Lista duplamente ligada é muito semelhante à lista ligada. Ela possui, além da referência para o próximo elemento, a referência para o anterior. Além da posição "head", ela controla também a posição "tail".

### Hash Table

Uma Tabela Hash é uma estrutura de dados de propósito geral em formato <chave, valor>, que pode ser representada por um array, e deve ser capaz de armazenar objetos de qualquer tipo. Ela não é sequencial como arrays e listas ligadas.

Como a HashTable utiliza um índice criado a partir de um cálculo, quando é necessário buscar por um determinado valor dentro de uma HashTable a posição do elemento já é previamente conhecida, reduzindo ou eliminando a necessidade de interação nesta estrutura. A adição tem um custo de atribuição arr[pos] = element. A remoção se dá por arr[pos] = null.

Não somente a inserção, mas a busca e a remoção desse objeto pode ser realizada em tempo O(1), pois há uma correspondência direta entre o identificador único do objeto (a chave) e o índice em que ele se encontra no array.

O uso de um hashCode reduz o desperdício de memória, já que o uso de tabela de acesso direto para chaves cujo valor é muito alto pode gerar um array extremamente grande, cujo conjunto de chaves efetivamente utilizado é bem menor do que o conjunto de chaves possível. E nem sempre a chave é representada como um inteiro. Por exemplo, a Polícia Federal utiliza uma chave com 3 caracteres e 5 números inteiros (ex: CVP3018). Não é difícil notar que não há índice CVP3018 em um array. O hashCode deve ser uma posição válida em um array.

Uma analogia de HashTable é um armário cheio de gavetas (HashTable), e dentro das gavetas podem ser guardados vários objetos (LinkedList).

[Saiba mais sobre HashTable](https://joaoarthurbm.github.io/eda/posts/hashtable/)

### Three

A árvore não é uma estrutura de dados sequencial como arrays e listas ligadas - navegados em uma determinada ordem até o elemento.

Árvore Binária é a que contém até dois vértices.