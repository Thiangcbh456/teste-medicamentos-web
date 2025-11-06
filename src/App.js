import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ListaMedicamento from './ListaMedicamento';
import DetalheMedicamento from './DetalheMedicamento';

const medicamentos = [
  {
    id: "1",
    nome: "Metformina 500mg",
    descricao: "Controle da glicemia em Diabetes Tipo 2",
    descricaoDetalhada: `A Metformina 500mg é um medicamento utilizado para o controle da glicemia em pacientes com Diabetes Tipo 2. 
Ela ajuda a reduzir a produção de glicose pelo fígado e melhora a sensibilidade do corpo à insulina.

📌 Modo de uso:
Deve ser administrada conforme orientação médica, geralmente junto às refeições, para evitar desconfortos gastrointestinais.

⚠️ Advertências:
Não deve ser utilizada por pessoas com insuficiência renal grave. Sempre siga as recomendações do seu médico.`,
    dosagem: "500mg",
    estoque: 50,
    forma: "Comprimido",
    funcao: "Controle glicêmico",
    categoria: "Diabetes",
    imageUrl: "https://santaluciadrogaria.vtexassets.com/arquivos/ids/187467/7891721000614.png?v=637704966349670000",
    preco: 15.9,
    maisPesquisado: true,
    topDoMomento: true
  },
  {
    id: "10",
    nome: "Amoxicilina 500mg",
    descricao: "Antibiótico para infecções bacterianas",
    descricaoDetalhada: `A Amoxicilina 500mg é um antibiótico indicado para o tratamento de infecções causadas por bactérias sensíveis, 
como infecções respiratórias, urinárias, de pele e ouvido.

📌 Modo de uso:
Deve ser administrada por via oral, conforme prescrição médica, podendo ser tomada antes ou após as refeições.

⚠️ Advertências:
O uso inadequado de antibióticos pode gerar resistência bacteriana. É essencial completar o ciclo de tratamento conforme orientado pelo médico.`,
    dosagem: "500mg",
    estoque: 40,
    forma: "Cápsula",
    funcao: "Antibiótico",
    categoria: "Antibióticos",
    imageUrl: "https://maxxieconomica.com/storage/photos/1/Products/ean/7896004702223.jpg",
    preco: 28.9,
    maisPesquisado: true,
    topDoMomento: false
  },
  {
    id: "11",
    nome: "Azitromicina 500mg",
    descricao: "Antibiótico de amplo espectro",
    descricaoDetalhada: `A Azitromicina 500mg é um antibiótico de amplo espectro indicado para o tratamento de diversas infecções bacterianas, 
como infecções respiratórias, de pele e sexualmente transmissíveis.

📌 Modo de uso:
A dose e a duração do tratamento devem ser orientadas pelo médico, geralmente em um ciclo curto de 3 a 5 dias.

⚠️ Advertências:
Evite o uso sem prescrição. O uso indevido pode causar resistência bacteriana. Informe ao médico sobre alergias a macrolídeos.`,
    dosagem: "500mg",
    estoque: 35,
    forma: "Comprimido",
    funcao: "Antibiótico",
    categoria: "Antibióticos",
    imageUrl: "https://www.disbem.com.br/imagens/informacoes/medicamento-azitromicina-500mg-02.webp",
    preco: 35.9,
    maisPesquisado: true,
    topDoMomento: true
  },
  {
    id: "12",
    nome: "Cefalexina 500mg",
    descricao: "Antibiótico cefalosporina",
    descricaoDetalhada: `A Cefalexina 500mg é um antibiótico do grupo das cefalosporinas, indicado para o tratamento de diversas infecções bacterianas. 
É eficaz contra infecções das vias respiratórias, urinárias, de pele e tecidos moles, causadas por micro-organismos sensíveis à sua ação.

📌 Modo de uso:
A dosagem deve ser orientada por um profissional de saúde, variando conforme a gravidade da infecção e a resposta do paciente ao tratamento.

⚠️ Advertências:
Não deve ser utilizada por pessoas alérgicas a cefalosporinas ou penicilinas. O uso inadequado de antibióticos pode gerar resistência bacteriana. Sempre utilize sob prescrição médica.`,
    dosagem: "500mg",
    estoque: 45,
    forma: "Cápsula",
    funcao: "Antibiótico",
    categoria: "Antibióticos",
    imageUrl: "https://www.ablbrasil.com.br/wp-content/uploads/2022/09/imagnes-setembro-2022-v02_Prancheta-1.png",
    preco: 22.5,
    maisPesquisado: false,
    topDoMomento: false
  },
  {
    id: "100",
    nome: "L-Carnitina 500mg",
    descricao: "Queimador de gordura",
    descricaoDetalhada: `A L-Carnitina 500mg é um suplemento termogênico que auxilia na queima de gordura e melhora a performance física.

📌 Modo de uso:
Tomar conforme orientação do nutricionista ou médico, geralmente antes dos treinos.

⚠️ Advertências:
Não deve ser utilizada por pessoas com problemas cardíacos sem supervisão profissional.`,
    dosagem: "500mg",
    estoque: 30,
    forma: "Cápsula",
    funcao: "Termogênico",
    categoria: "Termogênicos",
    imageUrl: "https://drogariasp.vteximg.com.br/arquivos/ids/932059-1000-1000/image-ca8e8ec47c1742c5a491999a7a4a1683.jpg?v=638249368259500000",
    preco: 58.9,
    maisPesquisado: true,
    topDoMomento: true
  },
  {
    id: "13",
    nome: "Loratadina 10mg",
    descricao: "Antialérgico para rinite e urticária",
    descricaoDetalhada: `A Loratadina 10mg é um antialérgico utilizado para aliviar sintomas de rinite alérgica e urticária, como coceira, espirros e olhos lacrimejantes.

📌 Modo de uso:
Tomar conforme prescrição médica, geralmente uma vez ao dia.

⚠️ Advertências:
Evite o uso em crianças pequenas sem orientação médica e informe ao profissional sobre outras medicações em uso.`,
    dosagem: "10mg",
    estoque: 90,
    forma: "Comprimido",
    funcao: "Antialérgico",
    categoria: "Antialérgicos",
    imageUrl: "https://i3-imagens-prd.araujo.com.br/webp/79069/134394_7896714213040_1.webp",
    preco: 8.9,
    maisPesquisado: false,
    topDoMomento: true
  },
  {
    id: "14",
    nome: "Desloratadina 5mg",
    descricao: "Antialérgico de nova geração",
    descricaoDetalhada: `A Desloratadina 5mg é um antialérgico de nova geração, utilizado para aliviar sintomas de rinite e alergias sazonais.

📌 Modo de uso:
Tomar conforme orientação médica, geralmente uma vez ao dia.

⚠️ Advertências:
Informe ao médico sobre outras medicações em uso e siga sempre a prescrição médica.`,
    dosagem: "5mg",
    estoque: 60,
    forma: "Comprimido",
    funcao: "Antialérgico",
    categoria: "Antialérgicos",
    imageUrl: "https://product-data.raiadrogasil.io/images/3555168.webp",
    preco: 15.9,
    maisPesquisado: false,
    topDoMomento: false
  },
  {
    id: "15",
    nome: "Cetirizina 10mg",
    descricao: "Antialérgico para alergias sazonais",
    descricaoDetalhada: `A Cetirizina 10mg é um antialérgico utilizado para o alívio de sintomas de alergias sazonais, como coceira, espirros e congestão nasal.

📌 Modo de uso:
Tomar conforme prescrição médica, geralmente uma vez ao dia.

⚠️ Advertências:
Evite o uso em crianças pequenas sem orientação médica e siga sempre a prescrição médica.`,
    dosagem: "10mg",
    estoque: 75,
    forma: "Comprimido",
    funcao: "Antialérgico",
    categoria: "Antialérgicos",
    imageUrl: "https://santaluciadrogaria.vtexassets.com/arquivos/ids/156447/7896422507028.png?v=637637962503900000",
    preco: 12.5,
    maisPesquisado: false,
    topDoMomento: false
  },
  {
  id: "16",
  nome: "Clonazepam 2mg",
  descricao: "Tratamento de ansiedade e transtornos do pânico",
  descricaoDetalhada: `O Clonazepam 2mg é um ansiolítico utilizado no tratamento de ansiedade, crises de pânico e transtornos relacionados.

📌 Modo de uso:
Tomar conforme prescrição médica, geralmente uma vez ao dia.

⚠️ Advertências:
Evite uso prolongado sem supervisão médica. Pode causar sonolência, e a interrupção abrupta deve ser evitada.`,
  dosagem: "2mg",
  estoque: 30,
  forma: "Comprimido",
  funcao: "Ansiolítico",
  categoria: "Ansiolíticos",
  imageUrl: "https://hmcmax.com/wp-content/uploads/2023/06/clonazepam2mg.jpg",
  preco: 18.9,
  maisPesquisado: true,
  topDoMomento: true,
  popularidade: 5
},
{
  id: "17",
  nome: "Alprazolam 0.5mg",
  descricao: "Tratamento de ansiedade",
  descricaoDetalhada: `O Alprazolam 0.5mg é um ansiolítico utilizado para o tratamento de ansiedade e sintomas relacionados.

📌 Modo de uso:
Tomar conforme prescrição médica, geralmente uma a duas vezes ao dia.

⚠️ Advertências:
Evite uso prolongado sem orientação médica. Pode causar sonolência, tontura e dependência se usado de forma inadequada.`,
  dosagem: "0.5mg",
  estoque: 25,
  forma: "Comprimido",
  funcao: "Ansiolítico",
  categoria: "Ansiolíticos",
  imageUrl: "https://res.cloudinary.com/prixz/image/upload/q_auto/f_auto/items/7501249607744.webp",
  preco: 22.9,
  maisPesquisado: false,
  topDoMomento: false,
  popularidade: 4
},
{
  id: "18",
  nome: "Vitamina C 500mg",
  descricao: "Suplemento vitamínico",
  descricaoDetalhada: `A Vitamina C 500mg é um suplemento vitamínico que auxilia na proteção do sistema imunológico e na prevenção de deficiências nutricionais.

📌 Modo de uso:
Tomar conforme orientação médica ou nutricional, geralmente uma vez ao dia dissolvendo em água.

⚠️ Advertências:
Não exceder a dose recomendada. Pessoas com problemas renais devem consultar um médico antes do uso.`,
  dosagem: "500mg",
  estoque: 100,
  forma: "Comprimido efervescente",
  funcao: "Suplemento vitamínico",
  categoria: "Vitaminas",
  imageUrl: "https://drogariamoderna.vtexassets.com/arquivos/ids/234718-800-auto?v=638140169631100000&width=800&height=auto&aspect=true",
  preco: 9.9,
  maisPesquisado: false,
  topDoMomento: true,
  popularidade: 4
},
{
  id: "19",
  nome: "Vitamina D 1000UI",
  descricao: "Suplemento de vitamina D",
  descricaoDetalhada: `A Vitamina D 1000UI é um suplemento que auxilia na absorção de cálcio, fortalecendo ossos e dentes, e contribuindo para a saúde do sistema imunológico.

📌 Modo de uso:
Tomar conforme orientação médica ou nutricional, geralmente uma cápsula por dia.

⚠️ Advertências:
Não exceder a dose recomendada. Pessoas com hipercalcemia ou problemas renais devem consultar um médico antes do uso.`,
  dosagem: "1000UI",
  estoque: 55,
  forma: "Cápsula",
  funcao: "Suplemento vitamínico",
  categoria: "Vitaminas",
  imageUrl: "https://drogariasp.vteximg.com.br/arquivos/ids/391993-1000-1000/vitamina-d-vit-care-1000ui-30-capsulas-Drogaria-SP-700274.jpg?v=637160085678400000",
  preco: 35.9,
  maisPesquisado: true,
  topDoMomento: false,
  popularidade: 5
},
{
  id: "2",
  nome: "Metformina 850mg",
  descricao: "Controle da glicemia em Diabetes Tipo 2",
  descricaoDetalhada: `A Metformina 850mg é indicada para o controle da glicemia em pacientes com Diabetes Tipo 2. 
Ela ajuda a reduzir a produção de glicose pelo fígado e melhora a sensibilidade do corpo à insulina.

📌 Modo de uso:
Tomar conforme orientação médica, geralmente junto às refeições, para minimizar desconfortos gastrointestinais.

⚠️ Advertências:
Não deve ser utilizada por pessoas com insuficiência renal grave. Sempre siga as recomendações do seu médico.`,
  dosagem: "850mg",
  estoque: 45,
  forma: "Comprimido",
  funcao: "Controle glicêmico",
  categoria: "Diabetes",
  imageUrl: "https://santaluciadrogaria.vtexassets.com/arquivos/ids/156645/7896422508063.png?v=637637969558700000",
  preco: 18.5, // ajuste o preço se necessário
  maisPesquisado: false,
  topDoMomento: false,
  popularidade: 3
},
{
  id: "20",
  nome: "Complexo B",
  descricao: "Suplemento vitamínico do complexo B",
  descricaoDetalhada: `O Complexo B é um suplemento vitamínico que fornece múltiplas vitaminas do complexo B, essenciais para o metabolismo energético, saúde do sistema nervoso e fortalecimento do organismo.

📌 Modo de uso:
Tomar conforme orientação médica ou nutricional, geralmente uma vez ao dia.

⚠️ Advertências:
Não exceder a dose recomendada. Em caso de gravidez, lactação ou uso de outros medicamentos, consultar um profissional de saúde.`,
  dosagem: "Múltiplas",
  estoque: 80,
  forma: "Comprimido",
  funcao: "Suplemento vitamínico",
  categoria: "Vitaminas",
  imageUrl: "https://product-data.raiadrogasil.io/images/7964331.webp",
  preco: 15.9,
  maisPesquisado: false,
  topDoMomento: false,
  popularidade: 3
},
{
  id: "21",
  nome: "Sinvastatina 20mg",
  descricao: "Redução do colesterol",
  descricaoDetalhada: `A Sinvastatina 20mg é um medicamento utilizado para reduzir os níveis de colesterol e prevenir doenças cardiovasculares.

📌 Modo de uso:
Tomar conforme prescrição médica, geralmente à noite, podendo ser antes ou após as refeições.

⚠️ Advertências:
Não deve ser utilizada por pessoas com doenças hepáticas ou grávidas. Sempre siga as recomendações do seu médico.`,
  dosagem: "20mg",
  estoque: 45,
  forma: "Comprimido",
  funcao: "Redutor de colesterol",
  categoria: "Colesterol",
  imageUrl: "https://santaluciadrogaria.vtexassets.com/arquivos/ids/156614/7896422507844.png?v=637637968824870000",
  preco: 28.9,
  maisPesquisado: true,
  topDoMomento: false,
  popularidade: 4
},
{
  id: "22",
  nome: "Atorvastatina 20mg",
  descricao: "Controle do colesterol alto",
  descricaoDetalhada: `A Atorvastatina 20mg é utilizada para controlar níveis elevados de colesterol e prevenir doenças cardiovasculares.

📌 Modo de uso:
Tomar conforme prescrição médica, geralmente à noite, podendo ser antes ou após as refeições.

⚠️ Advertências:
Não deve ser utilizada por pessoas com doenças hepáticas ou grávidas. Sempre siga as orientações do seu médico.`,
  dosagem: "20mg",
  estoque: 40,
  forma: "Comprimido",
  funcao: "Redutor de colesterol",
  categoria: "Colesterol",
  imageUrl: "https://santaluciadrogaria.vtexassets.com/arquivos/ids/158634/7896422520966.png?v=637638018853930000",
  preco: 35.9,
  maisPesquisado: true,
  topDoMomento: true,
  popularidade: 5
},
{
  id: "23",
  nome: "Rosuvastatina 10mg",
  descricao: "Tratamento de dislipidemia",
  descricaoDetalhada: `A Rosuvastatina 10mg é indicada para o tratamento de dislipidemia, ajudando a reduzir os níveis de colesterol LDL e triglicerídeos.

📌 Modo de uso:
Tomar conforme prescrição médica, geralmente uma vez ao dia, podendo ser antes ou após as refeições.

⚠️ Advertências:
Não deve ser utilizada por pessoas com doenças hepáticas ou grávidas. Siga sempre as orientações do seu médico.`,
  dosagem: "10mg",
  estoque: 35,
  forma: "Comprimido",
  funcao: "Redutor de colesterol",
  categoria: "Colesterol",
  imageUrl: "https://portal.riomeddistribuicao.com.br/11696-thickbox_default/rosuvastatina-calcica-10mg-30com-geolab.webp",
  preco: 42.9,
  maisPesquisado: false,
  topDoMomento: false,
  popularidade: 4
},
{
  id: "24",
  nome: "Salbutamol 100mcg",
  descricao: "Broncodilatador para asma",
  descricaoDetalhada: `O Salbutamol 100mcg é um broncodilatador utilizado no tratamento de asma e outras doenças respiratórias, ajudando a aliviar crises de falta de ar e chiado no peito.

📌 Modo de uso:
Utilizar conforme orientação médica, geralmente 1 a 2 doses por inalação, podendo repetir conforme necessidade.

⚠️ Advertências:
Evite uso excessivo. Informe ao médico caso possua doenças cardíacas ou pressão alta.`,
  dosagem: "100mcg",
  estoque: 30,
  forma: "Spray",
  funcao: "Broncodilatador",
  categoria: "Respiratórios",
  imageUrl: "https://images.tcdn.com.br/img/img_prod/740081/aerolin_100mcg_spray_gsk_1907_1_4052d615c3da4032e19c29aec671a644.jpg",
  preco: 25.9,
  maisPesquisado: false,
  topDoMomento: false,
  popularidade: 4
},
{
  id: "25",
  nome: "Budesonida 32mcg",
  descricao: "Corticoide nasal",
  descricaoDetalhada: `A Budesonida 32mcg é um corticoide nasal utilizado para o tratamento de rinite alérgica e inflamações nasais, ajudando a reduzir congestão e irritação.

📌 Modo de uso:
Aplicar conforme orientação médica, geralmente 1 a 2 doses em cada narina por dia.

⚠️ Advertências:
Evite uso excessivo e informe ao médico caso possua infecções nasais ou pulmonares.`,
  dosagem: "32mcg",
  estoque: 25,
  forma: "Spray nasal",
  funcao: "Anti-inflamatório nasal",
  categoria: "Respiratórios",
  imageUrl: "https://santaluciadrogaria.vtexassets.com/arquivos/ids/157375/7896181915171.png?v=637637988994930000",
  preco: 38.9,
  maisPesquisado: false,
  topDoMomento: false,
  popularidade: 3
},
{
  id: "26",
  nome: "Omeprazol 20mg",
  descricao: "Inibidor de bomba de prótons",
  descricaoDetalhada: `O Omeprazol 20mg é um inibidor de bomba de prótons indicado para o tratamento de doenças relacionadas à acidez estomacal, como refluxo gastroesofágico e úlceras gástricas.

📌 Modo de uso:
Tomar conforme prescrição médica, geralmente 1 cápsula ao dia, 30 minutos antes da primeira refeição.

⚠️ Advertências:
Evite uso prolongado sem acompanhamento médico. Informe ao profissional sobre outras medicações em uso.`,
  dosagem: "20mg",
  estoque: 85,
  forma: "Cápsula",
  funcao: "Antiácido",
  categoria: "Digestivos",
  imageUrl: "https://uploads.consultaremedios.com.br/product_variation_images/full/e6052408670995ecb65281391ef7ba38e10dc8d1.JPG?1628872077",
  preco: 18.9,
  maisPesquisado: true,
  topDoMomento: true,
  popularidade: 5
},
{
  id: "27",
  nome: "Pantoprazol 40mg",
  descricao: "Tratamento de úlceras e refluxo",
  descricaoDetalhada: `O Pantoprazol 40mg é um medicamento indicado para o tratamento de úlceras gástricas e duodenais, esofagite de refluxo e condições associadas à produção excessiva de ácido.

📌 Modo de uso:
Tomar conforme orientação médica, geralmente 1 comprimido ao dia, 30 minutos antes da primeira refeição.

⚠️ Advertências:
Não interrompa o tratamento sem orientação médica. Informe ao profissional sobre outras medicações em uso.`,
  dosagem: "40mg",
  estoque: 70,
  forma: "Comprimido",
  funcao: "Antiácido",
  categoria: "Digestivos",
  imageUrl: "https://d16oedezm6qviu.cloudfront.net/Custom/Content/Products/54/52/54524_58436-pantoprazol-40mg-28-comprimidos_z1_638880093731812433.webp",
  preco: 25.9,
  maisPesquisado: false,
  topDoMomento: false,
  popularidade: 4
},
{
  id: "28",
  nome: "Esomeprazol 40mg",
  descricao: "Tratamento de refluxo gastroesofágico",
  descricaoDetalhada: `O Esomeprazol 40mg é um medicamento indicado para o tratamento de refluxo gastroesofágico, esofagite e condições associadas à produção excessiva de ácido.

📌 Modo de uso:
Tomar conforme orientação médica, geralmente 1 comprimido ao dia, 30 minutos antes da primeira refeição.

⚠️ Advertências:
Informe ao médico sobre uso de outros medicamentos. Não interrompa o tratamento sem orientação médica.`,
  dosagem: "40mg",
  estoque: 50,
  forma: "Comprimido",
  funcao: "Antiácido",
  categoria: "Digestivos",
  imageUrl: "https://dmvfarma.vtexassets.com/arquivos/ids/248640-800-auto?v=638562154203800000&width=800&height=auto&aspect=true",
  preco: 32.9,
  maisPesquisado: false,
  topDoMomento: false,
  popularidade: 3
},
{
  id: "29",
  nome: "Domperidona 10mg",
  descricao: "Antiemético para náuseas",
  descricaoDetalhada: `A Domperidona 10mg é indicada para o alívio de náuseas e vômitos causados por diferentes condições.

📌 Modo de uso:
Tomar conforme orientação médica, geralmente 1 comprimido antes das refeições.

⚠️ Advertências:
Não utilizar em casos de insuficiência hepática grave ou histórico de arritmias cardíacas sem supervisão médica.`,
  dosagem: "10mg",
  estoque: 65,
  forma: "Comprimido",
  funcao: "Antiemético",
  categoria: "Digestivos",
  imageUrl: "https://santaluciadrogaria.vtexassets.com/arquivos/ids/161810/7895296048057.png?v=637638094353130000",
  preco: 12.9,
  maisPesquisado: false,
  topDoMomento: true,
  popularidade: 4
},
{
  id: "3",
  nome: "Glibenclamida 5mg",
  descricao: "Estimula a secreção de insulina",
  descricaoDetalhada: `A Glibenclamida 5mg é indicada para auxiliar no controle da glicemia em pacientes com Diabetes Tipo 2, estimulando a secreção de insulina pelo pâncreas.

📌 Modo de uso:
Tomar conforme prescrição médica, geralmente antes das refeições principais.

⚠️ Advertências:
Não utilizar em casos de hipoglicemia ou diabetes tipo 1 sem orientação médica. Siga sempre a recomendação do seu profissional de saúde.`,
  dosagem: "5mg",
  estoque: 60,
  forma: "Comprimido",
  funcao: "Controle glicêmico",
  categoria: "Diabetes",
  imageUrl: "https://santaluciadrogaria.vtexassets.com/arquivos/ids/156807/7896004706474.png?v=637637973465100000",
  preco: 12.5,
  maisPesquisado: false,
  topDoMomento: true,
  popularidade: 3
},
{
  id: "30",
  nome: "Levotiroxina 50mcg",
  descricao: "Reposição hormonal tireoidiana",
  descricaoDetalhada: `A Levotiroxina 50mcg é utilizada para reposição hormonal em casos de hipotireoidismo, ajudando a normalizar os níveis de hormônio tireoidiano no organismo.

📌 Modo de uso:
Tomar diariamente conforme prescrição médica, de preferência em jejum, com um copo de água.

⚠️ Advertências:
Evite alterar a dose sem orientação médica. Informe ao profissional de saúde sobre outros medicamentos em uso.`,
  dosagem: "50mcg",
  estoque: 55,
  forma: "Comprimido",
  funcao: "Hormônio tireoidiano",
  categoria: "Hormônios",
  imageUrl: "https://santaluciadrogaria.vtexassets.com/arquivos/ids/157907/7891721019845.png?v=637638001494600000",
  preco: 15.9,
  maisPesquisado: true,
  topDoMomento: false,
  popularidade: 4
},
{
  id: "31",
  nome: "Levotiroxina 100mcg",
  descricao: "Reposição hormonal tireoidiana",
  descricaoDetalhada: `A Levotiroxina 100mcg é indicada para o tratamento do hipotireoidismo, promovendo a reposição adequada do hormônio tireoidiano essencial para o metabolismo corporal.

📌 Modo de uso:
Ingerir conforme orientação médica, preferencialmente pela manhã e em jejum, com um copo de água.

⚠️ Advertências:
Não interrompa o tratamento sem recomendação médica. Informe o profissional de saúde sobre o uso de outros medicamentos.`,
  dosagem: "100mcg",
  estoque: 50,
  forma: "Comprimido",
  funcao: "Hormônio tireoidiano",
  categoria: "Hormônios",
  imageUrl: "https://santaluciadrogaria.vtexassets.com/arquivos/ids/157273-800-1067?v=637637986681130000&width=800&height=1067&aspect=true",
  preco: 18.9,
  maisPesquisado: false,
  topDoMomento: false,
  popularidade: 4
},
{
  id: "32",
  nome: "Cetoconazol 20mg/g",
  descricao: "Antifúngico tópico",
  descricaoDetalhada: `O Cetoconazol 20mg/g é um medicamento antifúngico indicado para o tratamento de infecções de pele causadas por fungos, como micose, pé de atleta e dermatite seborréica.

📌 Modo de uso:
Aplicar uma fina camada do creme sobre a área afetada, uma ou duas vezes ao dia, conforme orientação médica.

⚠️ Advertências:
Evite o contato com os olhos e mucosas. Caso ocorra irritação ou reação alérgica, suspenda o uso e procure orientação médica.`,
  dosagem: "20mg/g",
  estoque: 40,
  forma: "Creme",
  funcao: "Antifúngico",
  categoria: "Dermatológicos",
  imageUrl: "https://i3-imagens-prd.araujo.com.br/webp/100433/7899095258426_1.webp",
  preco: 14.9,
  maisPesquisado: false,
  topDoMomento: false,
  popularidade: 3
},
{
  id: "33",
  nome: "Betametasona 1mg/g",
  descricao: "Corticoide tópico",
  descricaoDetalhada: `A Betametasona 1mg/g é uma pomada de uso dermatológico com ação anti-inflamatória, antialérgica e antipruriginosa, indicada para o tratamento de diversas condições inflamatórias da pele, como dermatites, eczemas e alergias cutâneas.

📌 Modo de uso:
Aplicar uma fina camada na área afetada, uma ou duas vezes ao dia, conforme orientação médica.

⚠️ Advertências:
Evite o uso prolongado sem supervisão médica. Não aplicar em áreas extensas do corpo ou sobre feridas abertas.`,
  dosagem: "1mg/g",
  estoque: 45,
  forma: "Pomada",
  funcao: "Anti-inflamatório tópico",
  categoria: "Dermatológicos",
  imageUrl: "https://www.drogariaminasbrasil.com.br/media/webp/catalog/product/cache/74c1057f7991b4edb2bc7bdaa94de933/image/48251b096/valerato-de-betametasona-1-0-mg-g-pomada-generico-medley-30g_jpg.webp",
  preco: 12.5,
  maisPesquisado: false,
  topDoMomento: false,
  popularidade: 3
},
{
  id: "34",
  nome: "Neomicina + Bacitracina",
  descricao: "Antibiótico tópico",
  descricaoDetalhada: `A pomada Neomicina + Bacitracina é um antibiótico tópico indicado para o tratamento e prevenção de infecções cutâneas causadas por bactérias sensíveis a esses princípios ativos. É amplamente utilizada em ferimentos, cortes superficiais e pequenas queimaduras.

📌 Modo de uso:
Aplicar uma fina camada sobre a área afetada, de uma a três vezes ao dia, conforme orientação médica.

⚠️ Advertências:
Evite o uso prolongado. Não utilizar em áreas extensas da pele ou sobre feridas abertas profundas. Suspender o uso em caso de irritação local.`,
  dosagem: "5mg+250UI/g",
  estoque: 60,
  forma: "Pomada",
  funcao: "Antibiótico tópico",
  categoria: "Dermatológicos",
  imageUrl: "https://d16w7cuzwgzfcy.cloudfront.net/Custom/Content/Products/13/69/136963_neomicina-bacitracina-pda-15g-generico-medley-p223255_z2_638951713266743861.webp",
  preco: 8.9,
  maisPesquisado: false,
  topDoMomento: true,
  popularidade: 4
},
{
  id: "35",
  nome: "Dexametasona Colírio",
  descricao: "Anti-inflamatório oftálmico",
  descricaoDetalhada: `O colírio de Dexametasona é indicado para reduzir inflamações oculares causadas por alergias, cirurgias ou outras condições inflamatórias.

📌 Modo de uso:
Instilar 1 a 2 gotas no(s) olho(s) afetado(s) de 2 a 4 vezes ao dia, conforme orientação médica.

⚠️ Advertências:
Não utilizar em caso de infecção ocular bacteriana sem prescrição. Evitar contato com lentes de contato durante o uso.`,
  dosagem: "1mg/ml",
  estoque: 30,
  forma: "Colírio",
  funcao: "Anti-inflamatório oftálmico",
  categoria: "Oftálmicos",
  imageUrl: "https://www.geolab.com.br/wp-content/uploads/2021/05/cloridratodebetaxolol-500x500-1.png",
  preco: 18.9,
  maisPesquisado: false,
  topDoMomento: false,
  popularidade: 3
},
{
  id: "36",
  nome: "Tobramicina Colírio",
  descricao: "Antibiótico oftálmico",
  descricaoDetalhada: `O colírio de Tobramicina é indicado para tratar infecções oculares causadas por bactérias sensíveis.

📌 Modo de uso:
Instilar 1 a 2 gotas no(s) olho(s) afetado(s) de 3 a 4 vezes ao dia, conforme orientação médica.

⚠️ Advertências:
Não utilizar em caso de alergia à tobramicina. Evitar contato com lentes de contato durante o uso.`,
  dosagem: "3mg/ml",
  estoque: 25,
  forma: "Colírio",
  funcao: "Antibiótico oftálmico",
  categoria: "Oftálmicos",
  imageUrl: "https://www.geolab.com.br/wp-content/uploads/2021/05/cloridratodebetaxolol-500x500-1.png",
  preco: 22.9,
  maisPesquisado: false,
  topDoMomento: false,
  popularidade: 2
},
{
  id: "37",
  nome: "Glimepirida 2mg",
  descricao: "Antidiabético oral",
  descricaoDetalhada: `A Glimepirida 2mg é um medicamento indicado para o controle da glicemia em pacientes com Diabetes Tipo 2.

📌 Modo de uso:
Tomar conforme prescrição médica, geralmente uma vez ao dia, junto às refeições.

⚠️ Advertências:
Não utilizar em caso de hipoglicemia ou alergia ao medicamento. Sempre siga orientação médica.`,
  dosagem: "2mg",
  estoque: 40,
  forma: "Comprimido",
  funcao: "Controle glicêmico",
  categoria: "Diabetes",
  imageUrl: "https://portal.zilfarma.com/4393-thickbox_default/glimepirida-2mg-c30comp-100.webp",
  preco: 19.9,
  maisPesquisado: false,
  topDoMomento: false,
  popularidade: 3
},
{
  id: "38",
  nome: "Gliclazida 30mg",
  descricao: "Hipoglicemiante oral",
  descricaoDetalhada: `A Gliclazida 30mg é um medicamento utilizado para o controle da glicemia em pacientes com Diabetes Tipo 2.

📌 Modo de uso:
Tomar conforme prescrição médica, geralmente uma vez ao dia, junto às refeições.

⚠️ Advertências:
Evitar uso em caso de hipoglicemia ou alergia ao medicamento. Siga sempre as orientações médicas.`,
  dosagem: "30mg",
  estoque: 35,
  forma: "Comprimido",
  funcao: "Controle glicêmico",
  categoria: "Diabetes",
  imageUrl: "https://portal.zilfarma.com/9406-home_default/gliclazida-30mg-30comp.webp",
  preco: 24.9,
  maisPesquisado: false,
  topDoMomento: false,
  popularidade: 3
},
{
  id: "39",
  nome: "Captopril 25mg",
  descricao: "Inibidor da ECA",
  descricaoDetalhada: `O Captopril 25mg é um medicamento utilizado para o controle da pressão arterial em casos de hipertensão.

📌 Modo de uso:
Tomar conforme prescrição médica, geralmente 1 a 2 vezes ao dia.

⚠️ Advertências:
Não interromper o uso sem orientação médica. Informar ao profissional sobre alergias ou uso de outros medicamentos.`,
  dosagem: "25mg",
  estoque: 75,
  forma: "Comprimido",
  funcao: "Controle da pressão arterial",
  categoria: "Hipertensão",
  imageUrl: "https://portal.riomeddistribuicao.com.br/11713-thickbox_default/captopril-25mg-30com-geolab.webp",
  preco: 8.9,
  maisPesquisado: false,
  topDoMomento: false,
  popularidade: 4
},
{
  id: "4",
  nome: "Losartana 50mg",
  descricao: "Bloqueador dos receptores da angiotensina II, reduz a pressão arterial",
  descricaoDetalhada: `A Losartana 50mg é utilizada para o controle da pressão arterial, prevenindo complicações cardiovasculares.

📌 Modo de uso:
Tomar conforme prescrição médica, geralmente uma vez ao dia.

⚠️ Advertências:
Informe ao médico sobre outras medicações em uso e não interrompa o tratamento sem orientação profissional.`,
  dosagem: "50mg",
  estoque: 80,
  forma: "Comprimido",
  funcao: "Controle da pressão arterial",
  categoria: "Hipertensão",
  imageUrl: "https://drogariasbrasil.com/products_images/original/7612.png",
  preco: 25.9,
  maisPesquisado: true,
  topDoMomento: true,
  popularidade: 5
},
{
  id: "40",
  nome: "Amlodipina 5mg",
  descricao: "Bloqueador de canais de cálcio",
  descricaoDetalhada: `A Amlodipina 5mg é um medicamento utilizado para o controle da pressão arterial e prevenção de angina. 
É um bloqueador dos canais de cálcio que ajuda a relaxar os vasos sanguíneos, facilitando o fluxo de sangue e reduzindo a carga sobre o coração.

📌 Modo de uso:
Tomar conforme prescrição médica, geralmente uma vez ao dia.

⚠️ Advertências:
Informe ao médico sobre outras medicações em uso e não interrompa o tratamento sem orientação profissional.`,
  dosagem: "5mg",
  estoque: 65,
  forma: "Comprimido",
  funcao: "Controle da pressão arterial",
  categoria: "Hipertensão",
  imageUrl: "https://dmvfarma.vtexassets.com/arquivos/ids/272650-800-auto?v=638846496927230000&width=800&height=auto&aspect=true",
  preco: 12.9,
  maisPesquisado: true,
  topDoMomento: false,
  popularidade: 4
},
{
  id: "41",
  nome: "Hidroclorotiazida 25mg",
  descricao: "Diurético tiazídico",
  descricaoDetalhada: `A Hidroclorotiazida 25mg é um medicamento diurético indicado para o tratamento da hipertensão arterial e da retenção de líquidos no organismo. 
Ela age aumentando a eliminação de sal e água pelos rins, ajudando a reduzir o volume sanguíneo e controlar a pressão arterial.

📌 Modo de uso:
Tomar conforme prescrição médica, geralmente uma vez ao dia pela manhã.

⚠️ Advertências:
Informe ao médico sobre problemas renais ou o uso de outros medicamentos. 
Evite interromper o tratamento sem orientação profissional e mantenha acompanhamento regular da pressão arterial.`,
  dosagem: "25mg",
  estoque: 80,
  forma: "Comprimido",
  funcao: "Diurético",
  categoria: "Hipertensão",
  imageUrl: "https://santaluciadrogaria.vtexassets.com/arquivos/ids/157100-800-1067?v=637637981707000000&width=800&height=1067&aspect=true",
  preco: 6.9,
  maisPesquisado: false,
  topDoMomento: false,
  popularidade: 3
},
{
  id: "42",
  nome: "Propranolol 40mg",
  descricao: "Betabloqueador",
  descricaoDetalhada: `O Propranolol 40mg é um betabloqueador utilizado no tratamento da hipertensão arterial, angina e arritmias cardíacas.

📌 Modo de uso:
Tomar conforme prescrição médica, geralmente 1 a 2 vezes ao dia.

⚠️ Advertências:
Não interrompa o uso sem orientação médica. Informe ao profissional sobre problemas respiratórios ou cardíacos.`,
  dosagem: "40mg",
  estoque: 70,
  forma: "Comprimido",
  funcao: "Controle da pressão arterial",
  categoria: "Hipertensão",
  imageUrl: "https://santaluciadrogaria.vtexassets.com/arquivos/ids/236221/7894916550055.png?v=637711265393670000",
  preco: 9.9,
  maisPesquisado: false,
  topDoMomento: false,
  popularidade: 3
},
{
  id: "43",
  nome: "Atenolol 50mg",
  descricao: "Betabloqueador seletivo",
  descricaoDetalhada: `O Atenolol 50mg é um betabloqueador seletivo indicado para o tratamento da hipertensão arterial, angina e algumas arritmias cardíacas. 
Sua ação reduz a frequência cardíaca e a força das contrações do coração, ajudando a manter a pressão arterial sob controle.

📌 Modo de uso:
Tomar conforme prescrição médica, geralmente uma vez ao dia, no mesmo horário.

⚠️ Advertências:
Não interrompa o tratamento sem orientação médica. Informe ao profissional de saúde sobre histórico de problemas respiratórios, cardíacos ou o uso de outros medicamentos.`,
  dosagem: "50mg",
  estoque: 60,
  forma: "Comprimido",
  funcao: "Controle da pressão arterial",
  categoria: "Hipertensão",
  imageUrl: "https://portal.riomeddistribuicao.com.br/1003-thickbox_default/atenolol-50mg-30com-sandoz.webp",
  preco: 11.9,
  maisPesquisado: false,
  topDoMomento: false,
  popularidade: 3
},
{
  id: "44",
  nome: "Nimesulida 100mg",
  descricao: "Anti-inflamatório não esteroidal",
  descricaoDetalhada: `A Nimesulida 100mg é um anti-inflamatório não esteroidal (AINE) utilizado para o alívio da dor e da inflamação associadas a diversas condições, 
como dores musculares, artrite, dor de dente e febre. Atua reduzindo substâncias no organismo que causam inflamação e dor.

📌 Modo de uso:
Tomar conforme orientação médica, geralmente uma ou duas vezes ao dia após as refeições, com um copo de água.

⚠️ Advertências:
Evite o uso prolongado sem acompanhamento médico. 
Pessoas com histórico de problemas hepáticos, úlceras gástricas ou gastrite devem utilizar com cautela e sob supervisão profissional.`,
  dosagem: "100mg",
  estoque: 90,
  forma: "Comprimido",
  funcao: "Anti-inflamatório",
  categoria: "Dor e Inflamação",
  imageUrl: "https://paguemenos.vtexassets.com/arquivos/ids/683668/23143.jpg?v=638206977199670000",
  preco: 10.9,
  maisPesquisado: false,
  topDoMomento: true,
  popularidade: 4
},
{
  id: "45",
  nome: "Meloxicam 15mg",
  descricao: "Anti-inflamatório para artrite",
  descricaoDetalhada: `O Meloxicam 15mg é um anti-inflamatório não esteroidal (AINE) indicado para o tratamento de inflamações e dores articulares, 
como as causadas por artrite, osteoartrite e outras condições musculoesqueléticas. Ele atua reduzindo a inflamação e o desconforto, promovendo melhora na mobilidade e qualidade de vida do paciente.

📌 Modo de uso:
Tomar conforme prescrição médica, geralmente uma vez ao dia, de preferência junto a uma refeição para evitar desconforto gástrico.

⚠️ Advertências:
Evite o uso prolongado sem acompanhamento médico. 
Pessoas com histórico de problemas gástricos, renais ou hepáticos devem utilizar com cautela e sempre sob orientação profissional.`,
  dosagem: "15mg",
  estoque: 55,
  forma: "Comprimido",
  funcao: "Anti-inflamatório",
  categoria: "Dor e Inflamação",
  imageUrl: "https://catalogo.riomeddistribuicao.com.br/wp-content/uploads/2025/10/meloxicam-15mg-10com-geolab.webp",
  preco: 16.9,
  maisPesquisado: false,
  topDoMomento: false,
  popularidade: 3
},
{
  id: "46",
  nome: "Cetoprofeno 100mg",
  descricao: "Anti-inflamatório de ação prolongada",
  descricaoDetalhada: `O Cetoprofeno 100mg é um anti-inflamatório não esteroidal (AINE) de ação prolongada, indicado para o alívio de dores e inflamações em condições musculoesqueléticas, 
como artrites, bursites, tendinites e outros processos inflamatórios. Sua formulação ajuda a reduzir a dor, o inchaço e a rigidez articular.

📌 Modo de uso:
Tomar conforme orientação médica, geralmente uma cápsula ou comprimido a cada 12 horas, preferencialmente após as refeições.

⚠️ Advertências:
Evite o uso prolongado sem supervisão médica. 
Pessoas com histórico de úlcera gástrica, doenças renais ou hepáticas devem utilizar com cautela e acompanhamento profissional.`,
  dosagem: "100mg",
  estoque: 45,
  forma: "Comprimido",
  funcao: "Anti-inflamatório",
  categoria: "Dor e Inflamação",
  imageUrl: "https://portal.zilfarma.com/9193-thickbox_default/cetoprofeno-100mg-c20-comp.webp",
  preco: 18.9,
  maisPesquisado: false,
  topDoMomento: false,
  popularidade: 3
},
{
  id: "47",
  nome: "Naproxeno 500mg",
  descricao: "Anti-inflamatório para dores crônicas",
  descricaoDetalhada: `O Naproxeno 500mg é um anti-inflamatório não esteroidal (AINE) indicado para o alívio de dores e inflamações em condições agudas ou crônicas, 
como artrite, tendinite, dores musculares e cólicas menstruais. Ele atua reduzindo substâncias no organismo que causam inflamação, dor e febre.

📌 Modo de uso:
Tomar conforme prescrição médica, geralmente um comprimido a cada 12 horas, preferencialmente após as refeições.

⚠️ Advertências:
Evite o uso prolongado sem acompanhamento médico. 
Pessoas com histórico de úlcera, gastrite, problemas renais ou cardíacos devem informar o médico antes de iniciar o tratamento.`,
  dosagem: "500mg",
  estoque: 60,
  forma: "Comprimido",
  funcao: "Anti-inflamatório",
  categoria: "Dor e Inflamação",
  imageUrl: "https://www.drogarianovaesperanca.com.br/imagens/600x600/naproxeno-500mg-com-10-comprimidos-812714e171.jpg",
  preco: 14.9,
  maisPesquisado: false,
  topDoMomento: false,
  popularidade: 3
},
{
  id: "48",
  nome: "Ciprofloxacino 500mg",
  descricao: "Antibiótico quinolona",
  descricaoDetalhada: `O Ciprofloxacino 500mg é um antibiótico da classe das quinolonas, indicado para o tratamento de diversas infecções bacterianas, 
como infecções urinárias, respiratórias, gastrointestinais e de pele. Atua impedindo a multiplicação das bactérias e promovendo a eliminação da infecção.

📌 Modo de uso:
Tomar conforme prescrição médica, geralmente uma a duas vezes ao dia, podendo ser ingerido antes ou após as refeições. 
É importante completar o ciclo de tratamento mesmo que os sintomas desapareçam.

⚠️ Advertências:
Evite a exposição excessiva ao sol durante o uso. 
Não utilize este medicamento sem orientação médica e informe ao profissional de saúde sobre alergias a quinolonas ou outros antibióticos.`,
  dosagem: "500mg",
  estoque: 30,
  forma: "Comprimido",
  funcao: "Antibiótico",
  categoria: "Antibióticos",
  imageUrl: "https://io.convertiez.com.br/m/farmaponte/shop/products/images/25007/large/ciprofloxacino-500-14cp-pha_19873.jpg",
  preco: 32.9,
  maisPesquisado: false,
  topDoMomento: false,
  popularidade: 4
},
{
  id: "49",
  nome: "Levofloxacino 500mg",
  descricao: "Antibiótico fluorquinolona",
  descricaoDetalhada: `O Levofloxacino 500mg é um antibiótico da classe das fluorquinolonas, indicado para o tratamento de diversas infecções bacterianas, 
como infecções respiratórias, urinárias, de pele e tecidos moles. Atua destruindo as bactérias sensíveis, auxiliando no combate eficaz às infecções.

📌 Modo de uso:
Tomar conforme prescrição médica, geralmente uma vez ao dia, com ou sem alimentos, e com um copo de água. 
É fundamental completar o tratamento conforme orientação médica, mesmo que haja melhora dos sintomas.

⚠️ Advertências:
Evite exposição solar excessiva durante o tratamento. 
Pessoas com histórico de epilepsia, distúrbios tendeinosos ou uso de corticosteroides devem utilizar com cautela e sempre sob orientação médica.`,
  dosagem: "500mg",
  estoque: 25,
  forma: "Comprimido",
  funcao: "Antibiótico",
  categoria: "Antibióticos",
  imageUrl: "https://portal.zilfarma.com/2914-thickbox_default/levofloxacino-500mg-c10comp-60.webp",
  preco: 45.9,
  maisPesquisado: false,
  topDoMomento: false,
  popularidade: 3
},
{
  id: "5",
  nome: "Enalapril 10mg",
  descricao: "Inibidor da ECA que ajuda a relaxar os vasos sanguíneos",
  descricaoDetalhada: `O Enalapril 10mg é um medicamento pertencente à classe dos inibidores da enzima conversora da angiotensina (ECA), 
indicado para o tratamento da hipertensão arterial e da insuficiência cardíaca congestiva. Ele atua promovendo o relaxamento dos vasos sanguíneos, 
facilitando o bombeamento de sangue pelo coração e ajudando a reduzir a pressão arterial.

📌 Modo de uso:
Tomar conforme prescrição médica, geralmente uma ou duas vezes ao dia, podendo ser administrado com ou sem alimentos.

⚠️ Advertências:
Não interrompa o tratamento sem orientação médica. 
Informe ao profissional de saúde sobre problemas renais, uso de diuréticos ou histórico de angioedema. 
Evite o uso durante a gravidez e o aleitamento sem orientação médica.`,
  dosagem: "10mg",
  estoque: 65,
  forma: "Comprimido",
  funcao: "Controle da pressão arterial",
  categoria: "Hipertensão",
  imageUrl: "https://portal.riomeddistribuicao.com.br/15570-thickbox_default/enalapril-10mg-30com-vitamedic.webp",
  preco: 18.9,
  maisPesquisado: false,
  topDoMomento: false,
  popularidade: 4
},
{
  id: "50",
  nome: "Ampicilina 500mg",
  descricao: "Antibiótico penicilina",
  descricaoDetalhada: `A Ampicilina 500mg é um antibiótico da classe das penicilinas, indicada para o tratamento de diversas infecções causadas por bactérias sensíveis, 
como infecções respiratórias, urinárias, gastrointestinais, de pele e tecidos moles. Atua inibindo a síntese da parede celular das bactérias, levando à sua eliminação.

📌 Modo de uso:
Tomar conforme prescrição médica, geralmente a cada 6 ou 8 horas, podendo ser administrada antes ou após as refeições, com um copo de água.

⚠️ Advertências:
Não interrompa o tratamento antes do prazo indicado, mesmo que haja melhora dos sintomas. 
Informe ao médico em caso de histórico de alergia a penicilinas ou cefalosporinas. 
Evite o uso sem orientação médica para prevenir resistência bacteriana.`,
  dosagem: "500mg",
  estoque: 40,
  forma: "Cápsula",
  funcao: "Antibiótico",
  categoria: "Antibióticos",
  imageUrl: "https://bemolfarma.vtexassets.com/arquivos/ids/160389/4005205.jpg?v=638689362313600000",
  preco: 19.9,
  maisPesquisado: false,
  topDoMomento: false,
  popularidade: 3
},
{
  id: "51",
  nome: "Fluoxetina 20mg",
  descricao: "Antidepressivo ISRS",
  descricaoDetalhada: `A Fluoxetina 20mg é um antidepressivo pertencente à classe dos inibidores seletivos da recaptação de serotonina (ISRS). 
É indicada para o tratamento da depressão, transtorno obsessivo-compulsivo (TOC), ansiedade, bulimia nervosa e síndrome do pânico. 
Seu principal mecanismo de ação atua aumentando os níveis de serotonina no cérebro, ajudando a melhorar o humor e o bem-estar geral.

📌 Modo de uso:
Tomar conforme prescrição médica, geralmente uma vez ao dia, de preferência pela manhã, com ou sem alimentos.

⚠️ Advertências:
O tratamento deve ser realizado sob acompanhamento médico. 
Não interromper o uso abruptamente. Informe ao profissional de saúde sobre o uso de outros medicamentos e histórico de transtornos psiquiátricos.`,
  dosagem: "20mg",
  estoque: 50,
  forma: "Cápsula",
  funcao: "Antidepressivo",
  categoria: "Antidepressivos",
  imageUrl: "https://portal.riomeddistribuicao.com.br/13702-thickbox_default/cloridrato-fluoxetina-20mg-30caps-c1-sandoz.webp",
  preco: 15.9,
  maisPesquisado: true,
  topDoMomento: true,
  popularidade: 5
},
{
  id: "52",
  nome: "Sertralina 50mg",
  descricao: "Antidepressivo ISRS",
  descricaoDetalhada: `A Sertralina 50mg é um antidepressivo da classe dos inibidores seletivos da recaptação de serotonina (ISRS). 
É indicada para o tratamento de depressão, transtornos de ansiedade, síndrome do pânico, transtorno obsessivo-compulsivo (TOC) e transtorno de estresse pós-traumático (TEPT). 
Seu mecanismo de ação ajuda a equilibrar os níveis de serotonina no sistema nervoso central, promovendo melhora do humor e redução dos sintomas de ansiedade.

📌 Modo de uso:
Tomar conforme prescrição médica, geralmente uma vez ao dia, de preferência pela manhã, com ou sem alimentos.

⚠️ Advertências:
Não interrompa o tratamento sem orientação médica. 
Informe ao profissional de saúde sobre o uso de outros medicamentos e histórico de transtornos psiquiátricos. 
Pode causar sonolência ou insônia em alguns pacientes; o horário de administração deve ser ajustado conforme orientação médica.`,
  dosagem: "50mg",
  estoque: 45,
  forma: "Comprimido",
  funcao: "Antidepressivo",
  categoria: "Antidepressivos",
  imageUrl: "https://farmaciapermanente.com.br/media/produtos/7896422506304_400x400.jpg",
  preco: 22.9,
  maisPesquisado: true,
  topDoMomento: false,
  popularidade: 4
},
{
  id: "53",
  nome: "Escitalopram 10mg",
  descricao: "Antidepressivo e ansiolítico",
  descricaoDetalhada: `O Escitalopram 10mg é um medicamento antidepressivo e ansiolítico da classe dos inibidores seletivos da recaptação de serotonina (ISRS). 
É indicado para o tratamento da depressão, transtornos de ansiedade generalizada, síndrome do pânico e transtorno obsessivo-compulsivo (TOC). 
Seu mecanismo de ação atua aumentando a disponibilidade de serotonina no cérebro, contribuindo para o equilíbrio emocional e o bem-estar.

📌 Modo de uso:
Tomar conforme prescrição médica, geralmente uma vez ao dia, de preferência no mesmo horário, com ou sem alimentos.

⚠️ Advertências:
O uso deve ser feito sob acompanhamento médico. 
Não interrompa o tratamento sem orientação profissional. 
Pode causar sonolência ou alterações de sono em alguns pacientes, exigindo atenção ao realizar atividades que requerem concentração.`,
  dosagem: "10mg",
  estoque: 40,
  forma: "Comprimido",
  funcao: "Antidepressivo",
  categoria: "Antidepressivos",
  imageUrl: "https://www.prosperonline.com.br/3407-large_default/oxalato-escitalopram-c1-10mg-c-30.webp",
  preco: 28.9,
  maisPesquisado: false,
  topDoMomento: false,
  popularidade: 4
},
{
  id: "54",
  nome: "Citalopram 20mg",
  descricao: "Antidepressivo ISRS",
  descricaoDetalhada: `O Citalopram 20mg é um antidepressivo da classe dos inibidores seletivos da recaptação de serotonina (ISRS). 
É indicado para o tratamento da depressão, transtorno de ansiedade generalizada, síndrome do pânico e transtorno obsessivo-compulsivo (TOC). 
Seu mecanismo de ação aumenta a disponibilidade de serotonina no cérebro, auxiliando na melhora do humor e na redução dos sintomas depressivos e ansiosos.

📌 Modo de uso:
Tomar conforme prescrição médica, geralmente uma vez ao dia, de preferência no mesmo horário, com ou sem alimentos.

⚠️ Advertências:
Não interrompa o tratamento sem orientação médica. 
Informe ao profissional de saúde sobre o uso de outros medicamentos e histórico de transtornos psiquiátricos. 
Pode causar sonolência em algumas pessoas ou insônia em outras; ajuste do horário de uso pode ser necessário conforme recomendação médica.`,
  dosagem: "20mg",
  estoque: 35,
  forma: "Comprimido",
  funcao: "Antidepressivo",
  categoria: "Antidepressivos",
  imageUrl: "https://i0.wp.com/hmcmax.com/wp-content/uploads/2023/06/citalopram.jpg?fit=660%2C660&ssl=1",
  preco: 19.9,
  maisPesquisado: false,
  topDoMomento: false,
  popularidade: 3
},
{
  id: "55",
  nome: "Vitamina E 400UI",
  descricao: "Antioxidante",
  descricaoDetalhada: `A Vitamina E 400UI é um suplemento vitamínico com ação antioxidante, que auxilia na proteção das células contra os radicais livres. 
Contribui para a saúde da pele, do sistema imunológico e do sistema cardiovascular, além de apoiar o metabolismo celular e o bem-estar geral.

📌 Modo de uso:
Tomar conforme orientação médica ou nutricional, geralmente uma cápsula ao dia, de preferência junto às refeições.

⚠️ Advertências:
Não exceder a dose recomendada. 
Gestantes, lactantes e pessoas que façam uso de anticoagulantes devem consultar um profissional de saúde antes de iniciar o uso.`,
  dosagem: "400UI",
  estoque: 45,
  forma: "Cápsula",
  funcao: "Suplemento vitamínico",
  categoria: "Vitaminas",
  imageUrl: "https://drogal.vtexassets.com/arquivos/ids/189494/53521.jpg?v=638572513726700000",
  preco: 28.9,
  maisPesquisado: false,
  topDoMomento: false,
  popularidade: 3
},
{
  id: "56",
  nome: "Ácido Fólico 5mg",
  descricao: "Vitamina B9",
  descricaoDetalhada: `O Ácido Fólico 5mg é um suplemento vitamínico pertencente ao complexo B, também conhecido como vitamina B9. 
Desempenha papel essencial na formação das células sanguíneas, no metabolismo celular e na síntese do DNA. 
É amplamente recomendado para gestantes, pois auxilia na prevenção de malformações do tubo neural durante o desenvolvimento fetal.

📌 Modo de uso:
Tomar conforme orientação médica ou nutricional, geralmente uma vez ao dia, preferencialmente no mesmo horário.

⚠️ Advertências:
Não exceder a dosagem recomendada. 
Pessoas com histórico de anemia megaloblástica ou uso de outros suplementos devem consultar um profissional de saúde antes de iniciar a suplementação.`,
  dosagem: "5mg",
  estoque: 70,
  forma: "Comprimido",
  funcao: "Suplemento vitamínico",
  categoria: "Vitaminas",
  imageUrl: "https://dmvfarma.vtexassets.com/arquivos/ids/248710/Femme-Folico-5mg-30-Comprimidos-Revestidos.jpg?v=638956342569100000",
  preco: 8.9,
  maisPesquisado: false,
  topDoMomento: true,
  popularidade: 4
},
{
  id: "57",
  nome: "Zinco 7mg",
  descricao: "Suplemento mineral",
  descricaoDetalhada: `O Zinco 7mg é um suplemento mineral essencial para diversas funções do organismo, 
participando de processos ligados à imunidade, cicatrização de feridas, síntese de proteínas e manutenção da saúde da pele e dos cabelos. 
Também contribui para o bom funcionamento hormonal e metabólico.

📌 Modo de uso:
Tomar conforme orientação médica ou nutricional, geralmente uma vez ao dia, preferencialmente junto às refeições.

⚠️ Advertências:
Não exceder a dose recomendada. 
O uso deve ser supervisionado por um profissional de saúde em casos de deficiência diagnosticada ou em combinação com outros suplementos minerais.`,
  dosagem: "7mg",
  estoque: 55,
  forma: "Comprimido",
  funcao: "Suplemento mineral",
  categoria: "Vitaminas",
  imageUrl: "https://drogariasp.vteximg.com.br/arquivos/ids/478500-1000-1000/283509---zinco-quelato-stem-60-comprimidos-1.jpg?v=637707135672070000",
  preco: 18.9,
  maisPesquisado: false,
  topDoMomento: false,
  popularidade: 3
},
{
  id: "58",
  nome: "Ferro 40mg",
  descricao: "Suplemento de ferro",
  descricaoDetalhada: `O Ferro 40mg é um suplemento mineral indicado para a prevenção e o tratamento de anemias por deficiência de ferro. 
O mineral é essencial para a formação das células vermelhas do sangue, transporte de oxigênio e manutenção da energia corporal. 
Também pode ser recomendado durante a gestação, lactação ou em casos de dietas pobres em ferro.

📌 Modo de uso:
Tomar conforme orientação médica ou nutricional, geralmente uma vez ao dia, de preferência antes das refeições, acompanhado de um copo de água.

⚠️ Advertências:
Não exceder a dose recomendada. 
Pode causar escurecimento das fezes, o que é normal. 
Evite o uso concomitante com café, leite ou derivados logo após a ingestão, pois podem reduzir a absorção do ferro.`,
  dosagem: "40mg",
  estoque: 65,
  forma: "Comprimido",
  funcao: "Suplemento mineral",
  categoria: "Vitaminas",
  imageUrl: "https://prod-ecm-static-contents.s3.sa-east-1.amazonaws.com/36751/611e81691a758064bd64fb20",
  preco: 12.9,
  maisPesquisado: false,
  topDoMomento: false,
  popularidade: 4
},
{
  id: "59",
  nome: "Varfarina 5mg",
  descricao: "Anticoagulante oral",
  descricaoDetalhada: `A Varfarina 5mg é um anticoagulante oral utilizado para prevenir e tratar a formação de coágulos sanguíneos em condições como trombose venosa profunda, embolia pulmonar e fibrilação atrial. 
Ela atua inibindo a ação da vitamina K, essencial para a coagulação do sangue, ajudando a manter a fluidez sanguínea e reduzindo o risco de eventos tromboembólicos.

📌 Modo de uso:
Tomar conforme orientação médica, sempre no mesmo horário, com ou sem alimentos. 
A dosagem deve ser ajustada individualmente de acordo com o tempo de coagulação (INR) monitorado periodicamente.

⚠️ Advertências:
Jamais altere a dose ou interrompa o tratamento sem orientação médica. 
Evite mudanças bruscas na dieta, especialmente em alimentos ricos em vitamina K (como vegetais de folhas verdes). 
Informe ao médico sobre o uso de outros medicamentos, pois a varfarina possui várias interações.`,
  dosagem: "5mg",
  estoque: 30,
  forma: "Comprimido",
  funcao: "Anticoagulante",
  categoria: "Cardiovasculares",
  imageUrl: "https://farmedicon.com.br/wp-content/uploads/2021/03/VARFARINA-SODICA-5MG-C30-COMP-TEUTOResultado.jpg",
  preco: 22.9,
  maisPesquisado: false,
  topDoMomento: false,
  popularidade: 3
},
{
  id: "6",
  nome: "Paracetamol 500mg",
  descricao: "Alívio de dor e febre",
  descricaoDetalhada: `O Paracetamol 500mg é um medicamento com ação analgésica e antitérmica, indicado para o alívio de dores leves a moderadas, 
como dor de cabeça, dor muscular, dor de dente e cólicas, além de auxiliar na redução da febre. Atua no sistema nervoso central diminuindo a percepção da dor e controlando a temperatura corporal.

📌 Modo de uso:
Tomar conforme prescrição médica ou orientação farmacêutica, geralmente 1 comprimido a cada 4 a 6 horas, sem exceder a dose máxima diária recomendada.

⚠️ Advertências:
Evite o uso simultâneo de outros medicamentos que contenham paracetamol na composição. 
O uso prolongado ou em doses elevadas pode causar danos ao fígado. 
Em caso de sintomas persistentes, procure orientação médica.`,
  dosagem: "500mg",
  estoque: 120,
  forma: "Comprimido",
  funcao: "Analgesico e antitérmico",
  categoria: "Dor e Inflamação",
  imageUrl: "https://www.drogasil.com.br/_next/image?url=https%3A%2F%2Fproduct-data.raiadrogasil.io%2Fimages%2F3541518.webp&w=3840&q=40",
  preco: 6.5,
  maisPesquisado: true,
  topDoMomento: true,
  popularidade: 5
},
{
  id: "60",
  nome: "AAS 100mg",
  descricao: "Antiagregante plaquetário",
  descricaoDetalhada: `O AAS 100mg (ácido acetilsalicílico) é um medicamento com ação antiagregante plaquetária, utilizado principalmente para prevenir eventos cardiovasculares, 
como infarto do miocárdio e AVC isquêmico. Atua inibindo a agregação das plaquetas, o que ajuda a manter o sangue mais fluido e reduz a formação de coágulos.

📌 Modo de uso:
Tomar conforme prescrição médica, geralmente uma vez ao dia, preferencialmente após as refeições, com um copo de água.

⚠️ Advertências:
Não utilize o medicamento sem orientação médica. 
Evite o uso em caso de úlcera gástrica ativa, suscetibilidade a sangramentos ou alergia ao ácido acetilsalicílico. 
Informe ao médico sobre o uso concomitante de anticoagulantes ou anti-inflamatórios.`,
  dosagem: "100mg",
  estoque: 100,
  forma: "Comprimido",
  funcao: "Antiagregante",
  categoria: "Cardiovasculares",
  imageUrl: "https://drogal.vtexassets.com/arquivos/ids/208753/87321.jpg?v=638446554929500000",
  preco: 5.9,
  maisPesquisado: true,
  topDoMomento: true,
  popularidade: 5
},
{
  id: "61",
  nome: "Clopidogrel 75mg",
  descricao: "Antiagregante plaquetário",
  descricaoDetalhada: `O Clopidogrel 75mg é um antiagregante plaquetário indicado para a prevenção de eventos trombóticos, 
como infarto do miocárdio, AVC isquêmico e trombose em pacientes com doenças arteriais. 
Ele atua inibindo a agregação das plaquetas, ajudando a manter o sangue fluido e reduzindo o risco de formação de coágulos.

📌 Modo de uso:
Tomar conforme prescrição médica, geralmente uma vez ao dia, com ou sem alimentos. 
O tratamento deve ser contínuo e acompanhado regularmente por um profissional de saúde.

⚠️ Advertências:
Não interrompa o uso do medicamento sem orientação médica. 
Informe ao profissional sobre o uso de anticoagulantes, anti-inflamatórios ou outros medicamentos que aumentem o risco de sangramento. 
Evite automedicação e siga as recomendações do seu médico.`,
  dosagem: "75mg",
  estoque: 35,
  forma: "Comprimido",
  funcao: "Antiagregante",
  categoria: "Cardiovasculares",
  imageUrl: "https://portal.riomeddistribuicao.com.br/11372-thickbox_default/clopidogrel-75mg-28com-novartis.webp",
  preco: 38.9,
  maisPesquisado: false,
  topDoMomento: false,
  popularidade: 4
},
{
  id: "62",
  nome: "Digoxina 0.25mg",
  descricao: "Cardiotônico",
  descricaoDetalhada: `A Digoxina 0.25mg é um medicamento cardiotônico indicado para o tratamento da insuficiência cardíaca e de arritmias, 
como fibrilação atrial. Atua aumentando a força de contração do músculo cardíaco e auxiliando na regulação do ritmo dos batimentos, 
melhorando o desempenho do coração e a circulação sanguínea.

📌 Modo de uso:
Tomar conforme prescrição médica, geralmente uma vez ao dia, no mesmo horário. 
A dosagem deve ser ajustada individualmente conforme a resposta do paciente e os níveis séricos do medicamento.

⚠️ Advertências:
O uso deve ser feito sob rigorosa supervisão médica. 
Evite alterações na dose sem orientação profissional. 
Informe ao médico sobre o uso de diuréticos, suplementação de potássio ou outros medicamentos que possam interferir na função cardíaca.`,
  dosagem: "0.25mg",
  estoque: 40,
  forma: "Comprimido",
  funcao: "Cardiotônico",
  categoria: "Cardiovasculares",
  imageUrl: "https://nexodata.vtexassets.com/arquivos/ids/185242/7898216361595_IR.jpg?v=638108953729030000",
  preco: 14.9,
  maisPesquisado: false,
  topDoMomento: false,
  popularidade: 3
},
{
  id: "63",
  nome: "Gabapentina 300mg",
  descricao: "Anticonvulsivante e analgésico",
  descricaoDetalhada: `A Gabapentina 300mg é um medicamento anticonvulsivante e analgésico, indicado para o tratamento de crises epilépticas parciais 
e para o controle de dores neuropáticas, como aquelas causadas por neuropatia diabética ou neuralgia pós-herpética. 
Seu mecanismo de ação age modulando a atividade dos neurotransmissores, ajudando a estabilizar a função nervosa e reduzir a sensação de dor.

📌 Modo de uso:
Tomar conforme orientação médica, geralmente iniciando com doses baixas que podem ser ajustadas gradualmente. 
Pode ser administrada com ou sem alimentos, conforme indicação profissional.

⚠️ Advertências:
Não interromper o uso abruptamente sem orientação médica, pois pode haver risco de aumento nas crises convulsivas. 
Informe ao profissional de saúde sobre o uso de outros medicamentos e sobre histórico de insuficiência renal.`,
  dosagem: "300mg",
  estoque: 30,
  forma: "Cápsula",
  funcao: "Anticonvulsivante",
  categoria: "Neurológicos",
  imageUrl: "https://maxxieconomica.com/storage/photos/1/Products/ean/7896181904946.jpg",
  preco: 45.9,
  maisPesquisado: false,
  topDoMomento: false,
  popularidade: 4
},
{
  id: "64",
  nome: "Carbamazepina 200mg",
  descricao: "Anticonvulsivante",
  descricaoDetalhada: `A Carbamazepina 200mg é um medicamento anticonvulsivante indicado para o controle de diversos tipos de epilepsia e crises convulsivas. 
Também pode ser utilizada no tratamento de dores neuropáticas, como a neuralgia do trigêmeo, e em alguns casos de transtorno bipolar, 
auxiliando na estabilização do humor e prevenindo episódios de mania ou depressão.

📌 Modo de uso:
Tomar conforme prescrição médica, geralmente com doses iniciais baixas que podem ser aumentadas gradualmente. 
Recomenda-se administrar com alimentos para reduzir possíveis desconfortos gástricos.

⚠️ Advertências:
O uso requer acompanhamento médico regular, com monitoramento de função hepática e hematológica. 
Não interrompa o tratamento sem orientação profissional. 
Informe ao médico sobre o uso de outros medicamentos que possam interagir com a carbamazepina.`,
  dosagem: "200mg",
  estoque: 35,
  forma: "Comprimido",
  funcao: "Anticonvulsivante",
  categoria: "Neurológicos",
  imageUrl: "https://e.drogasul.med.br/4236-large_default/gcarbamazepina-200-mg-30-cpr-p344.webp",
  preco: 18.9,
  maisPesquisado: false,
  topDoMomento: false,
  popularidade: 3
},
{
  id: "65",
  nome: "Pregabalina 75mg",
  descricao: "Analgésico para dor neuropática",
  descricaoDetalhada: `A Pregabalina 75mg é um medicamento utilizado no tratamento de dores neuropáticas associadas a condições como neuropatia diabética, 
fibromialgia e dor pós-herpética. Também é indicada como terapia adjuvante em crises epilépticas parciais. 
Seu mecanismo de ação atua modulando a atividade dos neurotransmissores, reduzindo a excitabilidade dos neurônios e aliviando a dor.

📌 Modo de uso:
Tomar conforme prescrição médica, geralmente duas vezes ao dia, com ou sem alimentos. 
A dose pode ser ajustada gradualmente conforme a resposta do paciente e a orientação do profissional de saúde.

⚠️ Advertências:
Não interrompa o uso abruptamente, pois isso pode causar sintomas de abstinência. 
Informe ao médico sobre histórico de insuficiência renal, alcoolismo ou uso de outros medicamentos com efeito sobre o sistema nervoso central.`,
  dosagem: "75mg",
  estoque: 25,
  forma: "Cápsula",
  funcao: "Analgésico neuropático",
  categoria: "Neurológicos",
  imageUrl: "https://loja.solfarma.com.br//imagens/produto/grande/0000011445_000.png",
  preco: 68.9,
  maisPesquisado: false,
  topDoMomento: false,
  popularidade: 3
},
{
  id: "66",
  nome: "Topiramato 25mg",
  descricao: "Anticonvulsivante e preventivo de enxaqueca",
  descricaoDetalhada: `O Topiramato 25mg é um medicamento anticonvulsivante utilizado no tratamento de crises epilépticas e na prevenção de enxaquecas recorrentes. 
Ele atua estabilizando a atividade elétrica do cérebro e modulando os neurotransmissores, ajudando a reduzir a frequência e a intensidade das crises ou dores de cabeça.

📌 Modo de uso:
Tomar conforme prescrição médica, geralmente uma a duas vezes ao dia, podendo ser administrado com ou sem alimentos. 
A dose deve ser ajustada gradualmente até alcançar a resposta terapêutica ideal.

⚠️ Advertências:
Não interrompa o tratamento sem orientação médica. 
Informe ao profissional de saúde sobre histórico de cálculos renais, perda de peso significativa ou uso de outros medicamentos. 
Durante o tratamento, recomenda-se manter boa hidratação para evitar efeitos adversos renais.`,
  dosagem: "25mg",
  estoque: 30,
  forma: "Comprimido",
  funcao: "Anticonvulsivante",
  categoria: "Neurológicos",
  imageUrl: "https://hmcmax.com/wp-content/uploads/2023/06/TOPIRAMATO.jpg",
  preco: 32.9,
  maisPesquisado: false,
  topDoMomento: false,
  popularidade: 3
},
{
  id: "67",
  nome: "Levonorgestrel 0.75mg",
  descricao: "Contraceptivo de emergência",
  descricaoDetalhada: `O Levonorgestrel 0.75mg é um contraceptivo de emergência indicado para prevenir a gravidez após uma relação sexual desprotegida ou falha de outro método contraceptivo. 
Seu efeito consiste em inibir ou retardar a ovulação e dificultar a fecundação, sendo mais eficaz quando utilizado o quanto antes após o ato sexual.

📌 Modo de uso:
Tomar conforme orientação médica ou farmacêutica, preferencialmente dentro de até 72 horas após a relação desprotegida. 
A dose e o intervalo entre tomadas podem variar de acordo com a formulação.

⚠️ Advertências:
O uso não deve ser rotineiro nem substituir métodos contraceptivos regulares. 
Pode causar alterações no ciclo menstrual. 
Não protege contra infecções sexualmente transmissíveis (ISTs). 
Em caso de vômitos até 3 horas após a ingestão, é necessário repetir a dose.`,
  dosagem: "0.75mg",
  estoque: 50,
  forma: "Comprimido",
  funcao: "Contraceptivo emergência",
  categoria: "Contraceptivos",
  imageUrl: "https://5.imimg.com/data5/SELLER/Default/2025/10/553117598/QQ/YB/AS/42446126/levonorgestrel-tablet-0-75-mg.jpeg",
  preco: 15.9,
  maisPesquisado: true,
  topDoMomento: false,
  popularidade: 4
},
{
  id: "68",
  nome: "Desogestrel 75mcg",
  descricao: "Anticoncepcional oral",
  descricaoDetalhada: `O Desogestrel 75 mcg é um anticoncepcional oral de uso contínuo, indicado para a prevenção da gravidez. 
Pertence à classe dos contraceptivos apenas com progestagênio, sendo uma opção especialmente recomendada para mulheres que não podem utilizar estrogênios. 
Seu principal mecanismo de ação consiste em inibir a ovulação e alterar o muco cervical, dificultando a passagem dos espermatozoides.

📌 Modo de uso:
Tomar um comprimido ao dia, sempre no mesmo horário, sem intervalos entre as cartelas. 
Em caso de esquecimento, seguir as orientações médicas ou da bula do medicamento.

⚠️ Advertências:
O uso deve ser contínuo e supervisionado por um profissional de saúde. 
Pode ocorrer sangramento irregular durante os primeiros meses de uso. 
Este medicamento não protege contra infecções sexualmente transmissíveis (ISTs).`,
  dosagem: "75mcg",
  estoque: 45,
  forma: "Comprimido",
  funcao: "Contraceptivo oral",
  categoria: "Contraceptivos",
  imageUrl: "https://d1jgmae0hcnr1i.cloudfront.net/Custom/Content/Products/89/51/89517_desogestrel-75mg-c-84-cp-p136191_m1_638918005161988458.webp",
  preco: 22.9,
  maisPesquisado: false,
  topDoMomento: true,
  popularidade: 4
},
{
  id: "69",
  nome: "Fexofenadina 180mg",
  descricao: "Antialérgico não sedativo",
  descricaoDetalhada: `A Fexofenadina 180 mg é um antialérgico não sedativo indicado para o tratamento de rinite alérgica, urticária e outras condições associadas a reações alérgicas. 
Ela atua bloqueando a ação da histamina, substância responsável pelos sintomas de coceira, espirros e corrimento nasal, proporcionando alívio prolongado sem causar sonolência.

📌 Modo de uso:
Tomar conforme prescrição médica, geralmente uma vez ao dia, com um copo de água, podendo ser administrada com ou sem alimentos.

⚠️ Advertências:
Evite o uso simultâneo com suco de frutas cítricas, pois pode reduzir a absorção do medicamento. 
Informe ao médico em caso de insuficiência renal ou hepática. 
Não ultrapasse a dose indicada sem orientação profissional.`,
  dosagem: "180mg",
  estoque: 55,
  forma: "Comprimido",
  funcao: "Antialérgico",
  categoria: "Antialérgicos",
  imageUrl: "https://drogariavenancio.vtexassets.com/arquivos/ids/1060749/82964_Z.jpg?v=638279880409000000",
  preco: 28.9,
  maisPesquisado: false,
  topDoMomento: false,
  popularidade: 4
},
{
  id: "7",
  nome: "Ibuprofeno 400mg",
  descricao: "Alívio de dor, febre e inflamação",
  descricaoDetalhada: `O Ibuprofeno 400 mg é um medicamento anti-inflamatório não esteroidal (AINE) com ação analgésica e antitérmica. 
É indicado para o alívio de dores leves a moderadas, como dores musculares, dor de cabeça, cólicas menstruais, dores dentárias e inflamações, 
além de auxiliar na redução da febre.

📌 Modo de uso:
Tomar conforme prescrição médica, geralmente 1 comprimido a cada 6 ou 8 horas, preferencialmente após as refeições.

⚠️ Advertências:
Evite o uso prolongado sem acompanhamento médico. 
Pessoas com histórico de úlcera gástrica, problemas renais ou uso de anticoagulantes devem utilizar com cautela. 
Não administrar em caso de alergia conhecida ao ibuprofeno ou a outros anti-inflamatórios similares.`,
  dosagem: "400mg",
  estoque: 100,
  forma: "Comprimido",
  funcao: "Anti-inflamatório e analgésico",
  categoria: "Dor e Inflamação",
  imageUrl: "https://www.drogasil.com.br/_next/image?url=https%3A%2F%2Fproduct-data.raiadrogasil.io%2Fimages%2F16727535.webp&w=3840&q=40",
  preco: 8.9,
  maisPesquisado: false,
  topDoMomento: false,
  popularidade: 4
},
{
  id: "70",
  nome: "Bilastina 20mg",
  descricao: "Antialérgico de última geração",
  descricaoDetalhada: `A Bilastina 20 mg é um antialérgico de última geração indicado para o tratamento dos sintomas de rinite alérgica e urticária. 
Proporciona alívio eficaz de espirros, coceira, coriza e irritação ocular, sem causar sonolência significativa, o que favorece o uso durante o dia.

📌 Modo de uso:
Tomar conforme prescrição médica, geralmente uma vez ao dia, de preferência em jejum ou pelo menos uma hora antes das refeições.

⚠️ Advertências:
Evite o consumo de sucos cítricos, bebidas alcoólicas e certos antibióticos durante o tratamento, pois podem interferir na absorção do medicamento. 
Informe ao médico sobre o uso de outros medicamentos e condições de saúde pré-existentes.`,
  dosagem: "20mg",
  estoque: 40,
  forma: "Comprimido",
  funcao: "Antialérgico",
  categoria: "Antialérgicos",
  imageUrl: "https://drogariacatarinense.vtexassets.com/arquivos/ids/178839/742260.jpg?v=637828547395770000",
  preco: 35.9,
  maisPesquisado: false,
  topDoMomento: false,
  popularidade: 3
},
{
  id: "71",
  nome: "Brometo de Ipratrópio",
  descricao: "Broncodilatador",
  descricaoDetalhada: `O Brometo de Ipratrópio é um broncodilatador indicado para o tratamento e alívio de doenças respiratórias obstrutivas, 
como asma, bronquite crônica e doença pulmonar obstrutiva crônica (DPOC). 
Seu uso promove o relaxamento dos músculos das vias respiratórias, facilitando a passagem de ar e melhorando a respiração.

📌 Modo de uso:
Utilizar por inalação, conforme orientação médica. 
A dosagem e a frequência de administração variam de acordo com a gravidade da condição e a resposta do paciente. 
O medicamento deve ser utilizado com nebulizador apropriado.

⚠️ Advertências:
O medicamento deve ser usado exclusivamente por via inalatória, não devendo ser ingerido. 
Informe ao médico em caso de glaucoma, doenças cardíacas ou uso de outros broncodilatadores. 
Evite ultrapassar a dose recomendada sem orientação profissional.`,
  dosagem: "0.25mg/ml",
  estoque: 35,
  forma: "Solução inalação",
  funcao: "Broncodilatador",
  categoria: "Respiratórios",
  imageUrl: "https://images.rappi.com.br/products/2098798697-1619121959834.jpg",
  preco: 12.9,
  maisPesquisado: false,
  topDoMomento: false,
  popularidade: 3
},
{
  id: "72",
  nome: "Montelucaste 10mg",
  descricao: "Antileucotrieno para asma",
  descricaoDetalhada: `O Montelucaste 10 mg é um medicamento antiasmático pertencente à classe dos antileucotrienos. 
É indicado para o tratamento e prevenção da asma e para o alívio dos sintomas de rinite alérgica. 
Seu mecanismo de ação bloqueia os leucotrienos, substâncias responsáveis por causar inflamação e estreitamento das vias respiratórias.

📌 Modo de uso:
Tomar conforme prescrição médica, geralmente uma vez ao dia, preferencialmente à noite, com ou sem alimentos.

⚠️ Advertências:
O Montelucaste não é indicado para o alívio imediato de crises agudas de asma. 
Informe ao médico em caso de piora dos sintomas respiratórios ou surgimento de efeitos adversos como alterações de humor. 
O tratamento deve ser realizado de forma contínua e sob acompanhamento médico.`,
  dosagem: "10mg",
  estoque: 30,
  forma: "Comprimido",
  funcao: "Antiasmático",
  categoria: "Respiratórios",
  imageUrl: "https://santaluciadrogaria.vtexassets.com/arquivos/ids/158895/7896181926696.png?v=637638024910800000",
  preco: 42.9,
  maisPesquisado: false,
  topDoMomento: false,
  popularidade: 4
},
{
  id: "73",
  nome: "Formoterol 12mcg",
  descricao: "Broncodilatador de longa ação",
  descricaoDetalhada: `O Formoterol 12 mcg é um broncodilatador de longa ação indicado para o tratamento de doenças respiratórias obstrutivas, 
como asma e doença pulmonar obstrutiva crônica (DPOC). Ele atua relaxando os músculos das vias respiratórias, promovendo uma melhora sustentada na passagem do ar e aliviando os sintomas como falta de ar e chiado no peito.

📌 Modo de uso:
Utilizar conforme prescrição médica, por via inalatória, com auxílio do inalador apropriado. 
A frequência e a dose devem ser determinadas pelo médico, geralmente de uma a duas inalações diárias.

⚠️ Advertências:
O Formoterol não deve ser utilizado para o alívio imediato de crises agudas de asma. 
O uso deve ser sempre acompanhado de um médico, especialmente em pacientes com doenças cardíacas ou hipertensão. 
Evite exceder a dose prescrita.`,
  dosagem: "12mcg",
  estoque: 25,
  forma: "Cápsula inalação",
  funcao: "Broncodilatador",
  categoria: "Respiratórios",
  imageUrl: "https://d1jgmae0hcnr1i.cloudfront.net/Custom/Content/Products/13/32/133294_formocaps-12-mcg-po-inal-30-cap-ina-p70345_m1_638790327819623011.webp",
  preco: 48.9,
  maisPesquisado: false,
  topDoMomento: false,
  popularidade: 3
},
{
  id: "74",
  nome: "Ranitidina 150mg",
  descricao: "Antagonista H2",
  descricaoDetalhada: `A Ranitidina 150 mg é um medicamento pertencente à classe dos antagonistas dos receptores H2 da histamina, 
indicada para o tratamento de condições associadas à produção excessiva de ácido no estômago, 
como gastrite, úlcera gástrica, refluxo gastroesofágico e dispepsia. Atua reduzindo a secreção de ácido gástrico, proporcionando alívio da dor e melhora na digestão.

📌 Modo de uso:
Tomar conforme prescrição médica, geralmente uma ou duas vezes ao dia, preferencialmente antes das refeições ou ao deitar-se.

⚠️ Advertências:
O uso prolongado deve ser realizado sob supervisão médica. 
Informe ao profissional de saúde sobre doenças renais, uso de outros medicamentos ou histórico de alergias. 
Evite o consumo excessivo de bebidas alcoólicas e alimentos muito gordurosos durante o tratamento.`,
  dosagem: "150mg",
  estoque: 60,
  forma: "Comprimido",
  funcao: "Antiácido",
  categoria: "Digestivos",
  imageUrl: "https://www.cliquefarma.com.br/cdn-cgi/imagedelivery/HWe2hc9laId8jMwJ0Cw8sw/antak-150mg-com-rev-c-10.png/standard",
  preco: 14.9,
  maisPesquisado: false,
  topDoMomento: false,
  popularidade: 3
},
{
  id: "75",
  nome: "Loperamida 2mg",
  descricao: "Antidiarreico",
  descricaoDetalhada: `A Loperamida 2 mg é um medicamento antidiarreico indicado para o alívio dos sintomas da diarreia aguda ou crônica não infecciosa. 
Ela atua diminuindo os movimentos do intestino e aumentando a absorção de líquidos e sais, ajudando a restaurar a consistência normal das fezes e reduzir a frequência evacuatória.

📌 Modo de uso:
Tomar conforme prescrição médica ou orientação farmacêutica, geralmente após cada evacuação diarreica, respeitando o limite máximo diário recomendado.

⚠️ Advertências:
Não deve ser utilizada em casos de diarreia causada por infecção bacteriana ou associada a febre alta. 
O tratamento deve ser interrompido se não houver melhora em até 48 horas. 
Informe ao profissional de saúde sobre o uso de outros medicamentos e condições intestinais pré-existentes.`,
  dosagem: "2mg",
  estoque: 75,
  forma: "Comprimido",
  funcao: "Antidiarreico",
  categoria: "Digestivos",
  imageUrl: "https://pharmascience.com.br/wp-content/uploads/2020/05/Kaosec_12-comprimidos-AL.png",
  preco: 8.9,
  maisPesquisado: false,
  topDoMomento: true,
  popularidade: 4
},
{
  id: "76",
  nome: "Simeticona 40mg",
  descricao: "Antiflatulento",
  descricaoDetalhada: `A Simeticona 40 mg é um antiflatulento indicado para o alívio dos sintomas de gases intestinais, 
como sensação de inchaço, dor abdominal e desconforto decorrente do acúmulo de ar no trato digestivo. 
Ela age diminuindo a tensão superficial das bolhas de gás, facilitando sua eliminação natural pelo organismo.

📌 Modo de uso:
Tomar conforme prescrição médica ou orientação farmacêutica, geralmente após as refeições e antes de deitar-se. 
Pode ser usada por curtos períodos para alívio dos sintomas ocasionais.

⚠️ Advertências:
O uso prolongado deve ser feito apenas sob supervisão médica. 
Em caso de dor abdominal intensa, febre ou persistência dos sintomas, procure avaliação médica. 
Não há evidências de interações significativas com outros medicamentos.`,
  dosagem: "40mg",
  estoque: 85,
  forma: "Comprimido",
  funcao: "Antiflatulento",
  categoria: "Digestivos",
  imageUrl: "https://drogal.vtexassets.com/arquivos/ids/209280/87895.jpg?v=638446558285570000",
  preco: 6.9,
  maisPesquisado: false,
  topDoMomento: false,
  popularidade: 4
},
{
  id: "77",
  nome: "Bromoprida 10mg",
  descricao: "Antiemético e procinético",
  descricaoDetalhada: `A Bromoprida 10 mg é um medicamento com ação antiemética e procinética, indicado para o tratamento de náuseas, 
vômitos e distúrbios da motilidade gastrointestinal, como refluxo gastroesofágico e gastroparesia. 
Ela atua acelerando o esvaziamento gástrico e controlando o reflexo do vômito, proporcionando alívio rápido dos sintomas.

📌 Modo de uso:
Tomar conforme prescrição médica, geralmente uma a três vezes ao dia, antes das refeições. 
A dose pode variar de acordo com a gravidade do quadro clínico.

⚠️ Advertências:
Não utilizar em casos de hemorragia, perfuração ou obstrução gastrointestinal. 
Pode causar sonolência e, em alguns casos, agitação leve. 
Evite dirigir veículos ou operar máquinas se sentir efeitos no sistema nervoso central. 
O uso prolongado deve ser supervisionado por um profissional de saúde.`,
  dosagem: "10mg",
  estoque: 70,
  forma: "Comprimido",
  funcao: "Antiemético",
  categoria: "Digestivos",
  imageUrl: "https://uploads.consultaremedios.com.br/product_variation_images/full/2ebfc059b80a2de8de4a7c8e5ddbadc9f47ab28f.jpg?1641834824",
  preco: 10.9,
  maisPesquisado: false,
  topDoMomento: false,
  popularidade: 3
},
{
  id: "78",
  nome: "Lactulose 667mg/ml",
  descricao: "Laxante osmótico",
  descricaoDetalhada: `A Lactulose 667 mg/ml é um laxante osmótico indicado para o tratamento da constipação intestinal. 
Age aumentando a quantidade de água nas fezes, tornando-as mais macias e estimulando o trânsito intestinal natural. 
Também pode ser utilizada em casos de encefalopatia hepática, ajudando a reduzir os níveis de amônia no sangue.

📌 Modo de uso:
Tomar conforme prescrição médica, geralmente por via oral, podendo ser diluída em água ou suco. 
A dose deve ser ajustada conforme a resposta individual do paciente.

⚠️ Advertências:
O uso prolongado deve ser feito sob orientação médica. 
Pode causar gases, cólicas leves ou diarreia se administrada em doses elevadas. 
Informe ao médico caso esteja fazendo uso de outros medicamentos ou apresente intolerância à lactose.`,
  dosagem: "667mg/ml",
  estoque: 45,
  forma: "Xarope",
  funcao: "Laxante",
  categoria: "Digestivos",
  imageUrl: "https://product-data.raiadrogasil.io/images/3520743.webp",
  preco: 18.9,
  maisPesquisado: false,
  topDoMomento: false,
  popularidade: 3
},
{
  id: "79",
  nome: "Prednisona 20mg",
  descricao: "Corticoide oral",
  descricaoDetalhada: `A Prednisona 20 mg é um corticoide oral com ação anti-inflamatória e imunossupressora. 
É indicada para o tratamento de diversas condições, como alergias graves, doenças autoimunes, inflamações articulares (artrite), 
doenças respiratórias e reações dermatológicas. Atua reduzindo a inflamação e modulando a resposta do sistema imunológico.

📌 Modo de uso:
Tomar conforme prescrição médica, geralmente uma vez ao dia, de preferência pela manhã, junto a alimentos para reduzir desconfortos gástricos.

⚠️ Advertências:
O uso prolongado deve ser acompanhado por um profissional de saúde. 
Não interrompa o tratamento de forma abrupta, pois pode ser necessário reduzir a dose gradualmente. 
Informe ao médico se houver histórico de diabetes, hipertensão, osteoporose ou infecções recorrentes.`,
  dosagem: "20mg",
  estoque: 55,
  forma: "Comprimido",
  funcao: "Corticoide",
  categoria: "Hormônios",
  imageUrl: "https://www.equipofarma.com.br/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/4/0/408090133246am.png",
  preco: 12.9,
  maisPesquisado: false,
  topDoMomento: false,
  popularidade: 4
},
{
  id: "8",
  nome: "Dipirona 500mg",
  descricao: "Analgésico e antitérmico",
  descricaoDetalhada: `A Dipirona 500 mg é um medicamento com ação analgésica e antitérmica, indicada para o alívio de dores leves a moderadas 
e na redução da febre associada a diferentes condições. atua inibindo substâncias responsáveis pela dor e pela elevação da temperatura corporal.

📌 Modo de uso:
Tomar conforme prescrição médica ou orientação farmacêutica, geralmente um comprimido a cada 6 ou 8 horas, de acordo com a necessidade e a intensidade dos sintomas.

⚠️ Advertências:
Não utilizar em caso de alergia à dipirona ou a outros derivados pirazolônicos. 
Suspenda o uso e procure assistência médica se surgirem sinais de reação cutânea, queda na pressão arterial ou sintomas de hipersensibilidade. 
O uso prolongado deve ser feito sob supervisão médica.`,
  dosagem: "500mg",
  estoque: 150,
  forma: "Comprimido",
  funcao: "Analgésico e antitérmico",
  categoria: "Dor e Inflamação",
  imageUrl: "https://io.convertiez.com.br/m/drogalider/shop/products/images/21621/large/dipirona-sodica-medley-500mg-solucao-oral-frasco-gotejador-com-20ml_386.jpg",
  preco: 4.9,
  maisPesquisado: true,
  topDoMomento: false,
  popularidade: 5
},
{
  id: "80",
  nome: "Prednisolona 3mg/ml",
  descricao: "Corticoide oral líquido",
  descricaoDetalhada: `A Prednisolona 3 mg/ml é um corticoide de uso oral em solução líquida, indicado para o tratamento de doenças inflamatórias e alérgicas, 
como asma, artrite, dermatites, alergias respiratórias e outras condições que respondem à terapia corticosteroide. 
Possui ação anti-inflamatória e imunossupressora, auxiliando na redução de inchaços, vermelhidão e reações alérgicas.

📌 Modo de uso:
Utilizar conforme prescrição médica, com a dosagem ajustada de acordo com a gravidade da condição e o peso corporal. 
A solução pode ser administrada pura ou diluída em pequena quantidade de água.

⚠️ Advertências:
O uso deve ser feito sob supervisão médica e não deve ser interrompido abruptamente. 
Pode causar aumento do apetite e alterações de humor. 
Informe ao médico em caso de diabetes, pressão alta, infecções ativas ou uso de outros corticosteroides.`,
  dosagem: "3mg/ml",
  estoque: 40,
  forma: "Solução oral",
  funcao: "Corticoide",
  categoria: "Hormônios",
  imageUrl: "https://santaluciadrogaria.vtexassets.com/arquivos/ids/170207-800-1067?v=637702731653300000&width=800&height=1067&aspect=true",
  preco: 22.9,
  maisPesquisado: false,
  topDoMomento: false,
  popularidade: 3
},
{
  id: "81",
  nome: "Dexametasona 4mg",
  descricao: "Corticoide potente",
  descricaoDetalhada: `A Dexametasona 4 mg é um corticoide de alta potência com ação anti-inflamatória, antialérgica e imunossupressora. 
É indicada para o tratamento de uma ampla variedade de condições, incluindo inflamações articulares, doenças autoimunes, reações alérgicas graves, doenças respiratórias e distúrbios endócrinos. 
Atua reduzindo a inflamação e a resposta do sistema imunológico.

📌 Modo de uso:
Tomar conforme prescrição médica, geralmente uma vez ao dia, preferencialmente pela manhã, juntamente com alimentos ou leite para minimizar desconfortos gástricos.

⚠️ Advertências:
O uso prolongado requer monitoramento médico devido ao risco de efeitos adversos sistêmicos. 
Não interromper o tratamento subitamente, pois pode ser necessário reduzir a dose de forma gradual. 
Informe ao médico sobre o uso de outros medicamentos, especialmente anticoagulantes e antidiabéticos.`,
  dosagem: "4mg",
  estoque: 45,
  forma: "Comprimido",
  funcao: "Corticoide",
  categoria: "Hormônios",
  imageUrl: "https://io.convertiez.com.br/m/farmaponte/shop/products/images/25003/large/dexametasona-4mg-10cpr-leg_19877.jpg",
  preco: 15.9,
  maisPesquisado: true,
  topDoMomento: false,
  popularidade: 4
},
{
  id: "82",
  nome: "Clotrimazol 10mg/g",
  descricao: "Antifúngico tópico",
  descricaoDetalhada: `O Clotrimazol 10 mg/g é um antifúngico de uso tópico indicado para o tratamento de infecções causadas por fungos, 
como micoses, frieiras (pé de atleta), candidíase cutânea e infecções por dermatófitos e leveduras. 
O medicamento age inibindo o crescimento e eliminando os fungos responsáveis pelas infecções da pele.

📌 Modo de uso:
Aplicar uma fina camada do creme sobre a área afetada, geralmente duas a três vezes ao dia, conforme orientação médica. 
Recomenda-se manter o tratamento por alguns dias após o desaparecimento dos sintomas para prevenir recidivas.

⚠️ Advertências:
Uso exclusivamente externo. 
Evite o contato com os olhos, mucosas e feridas abertas. 
Em caso de irritação cutânea ou reação alérgica, suspenda o uso e procure orientação médica. 
Mantenha o local limpo e seco durante o tratamento.`,
  dosagem: "10mg/g",
  estoque: 50,
  forma: "Creme",
  funcao: "Antifúngico",
  categoria: "Dermatológicos",
  imageUrl: "https://www.drogarianovaesperanca.com.br/imagens/600x600/clotrimazol-creme-10mg-com-20g-9a604faa6a.jpg",
  preco: 9.9,
  maisPesquisado: false,
  topDoMomento: false,
  popularidade: 3
},
{
  id: "83",
  nome: "Mupirocina 20mg/g",
  descricao: "Antibiótico tópico",
  descricaoDetalhada: `A Mupirocina 20 mg/g é um antibiótico de uso tópico indicado para o tratamento de infecções cutâneas causadas por bactérias sensíveis, 
como impetigo, furúnculos, foliculite e pequenas infecções em cortes ou arranhões. 
Atua inibindo a síntese proteica das bactérias, promovendo a eliminação dos microrganismos e a cicatrização da pele.

📌 Modo de uso:
Aplicar uma fina camada da pomada sobre a área afetada, geralmente duas a três vezes ao dia, conforme recomendação médica. 
Pode ser coberta com curativo oclusivo, se indicado.

⚠️ Advertências:
Uso exclusivamente externo. 
Evite aplicar sobre mucosas, feridas extensas ou áreas com queimaduras graves. 
Interrompa o uso em caso de irritação local ou reações alérgicas. 
Evite o uso prolongado para prevenir resistência bacteriana.`,
  dosagem: "20mg/g",
  estoque: 35,
  forma: "Pomada",
  funcao: "Antibiótico tópico",
  categoria: "Dermatológicos",
  imageUrl: "https://static.wixstatic.com/media/474d30_6793971b3df544a4bbb3819fef76a41f~mv2.jpg/v1/fill/w_280,h_113,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/DERMOBAN-15G-CAZI.jpg",
  preco: 28.9,
  maisPesquisado: false,
  topDoMomento: false,
  popularidade: 3
},
{
  id: "84",
  nome: "Aciclovir 50mg/g",
  descricao: "Antiviral tópico",
  descricaoDetalhada: `O Aciclovir 50 mg/g é um medicamento antiviral de uso tópico indicado para o tratamento de infecções causadas pelo vírus do herpes simples, 
como herpes labial e herpes genital. Atua inibindo a multiplicação do vírus nas células infectadas, acelerando a cicatrização das lesões e reduzindo a dor e o desconforto.

📌 Modo de uso:
Aplicar uma fina camada do creme sobre a área afetada, geralmente a cada 4 horas (cinco vezes ao dia), conforme orientação médica. 
O tratamento deve ser iniciado assim que surgirem os primeiros sinais ou sintomas da infecção.

⚠️ Advertências:
Uso exclusivamente externo. 
Evite o contato com os olhos, mucosas e feridas profundas. 
O tratamento não elimina o vírus do organismo nem previne futuras recorrências. 
Lave bem as mãos antes e após cada aplicação.`,
  dosagem: "50mg/g",
  estoque: 45,
  forma: "Creme",
  funcao: "Antiviral",
  categoria: "Dermatológicos",
  imageUrl: "https://drogariacoop.vtexassets.com/arquivos/ids/168703/Novo-Projeto---2023-06-21T141627.678.jpg?v=638229646722770000",
  preco: 12.9,
  maisPesquisado: false,
  topDoMomento: true,
  popularidade: 4
},
{
  id: "85",
  nome: "Hidroquinona 40mg/g",
  descricao: "Despigmentante",
  descricaoDetalhada: `A Hidroquinona 40 mg/g é um agente despigmentante de uso tópico indicado para o tratamento de distúrbios de hiperpigmentação da pele, 
como melasma, manchas solares e sardas. Atua inibindo a produção excessiva de melanina, promovendo o clareamento gradual das áreas escurecidas.

📌 Modo de uso:
Aplicar uma fina camada do creme sobre a área afetada, geralmente uma a duas vezes ao dia, conforme prescrição médica. 
É fundamental utilizar protetor solar durante o tratamento para potencializar os resultados e prevenir novas manchas.

⚠️ Advertências:
Uso exclusivamente externo. 
Evite o contato com olhos, mucosas e áreas lesionadas. 
O uso prolongado deve ser feito apenas sob acompanhamento dermatológico, pois pode causar irritação, vermelhidão ou hipopigmentação excessiva. 
Interrompa o uso em caso de reações adversas.`,
  dosagem: "40mg/g",
  estoque: 30,
  forma: "Creme",
  funcao: "Despigmentante",
  categoria: "Dermatológicos",
  imageUrl: "https://maxxieconomica.com/storage/photos/1/Products/ean/7896004725833.jpg",
  preco: 35.9,
  maisPesquisado: false,
  topDoMomento: false,
  popularidade: 3
},
{
  id: "86",
  nome: "Nimesulida Gotas",
  descricao: "Anti-inflamatório oral",
  descricaoDetalhada: `A Nimesulida Gotas 50 mg/ml é um anti-inflamatório não esteroidal (AINE) com propriedades analgésicas e antitérmicas, 
indicada para o alívio de dores leves a moderadas e no tratamento de inflamações, febres e desconfortos odontológicos. 
Seu formato em gotas facilita a administração, especialmente em crianças ou pessoas com dificuldade para engolir comprimidos.

📌 Modo de uso:
Utilizar conforme prescrição médica, geralmente administrando as gotas diluídas em pequena quantidade de água, após as refeições. 
A dosagem é ajustada de acordo com o peso corporal e a gravidade dos sintomas.

⚠️ Advertências:
Evite o uso prolongado sem acompanhamento médico. 
Não administrar em casos de alergia a anti-inflamatórios, doenças hepáticas ou renais graves. 
Interrompa o uso e procure o médico caso surjam reações alérgicas, como irritação na pele ou dificuldade para respirar.`,
  dosagem: "50mg/ml",
  estoque: 50,
  forma: "Gotas",
  funcao: "Anti-inflamatório",
  categoria: "Odontológicos",
  imageUrl: "https://paguemenos.vtexassets.com/arquivos/ids/683667/23142.jpg?v=638206976228300000",
  preco: 14.9,
  maisPesquisado: false,
  topDoMomento: false,
  popularidade: 3
},
{
  id: "87",
  nome: "Clorexidina 0.12%",
  descricao: "Antisséptico bucal",
  descricaoDetalhada: `A Clorexidina 0.12% é uma solução antisséptica bucal indicada para a higienização da cavidade oral e prevenção de infecções gengivais. 
Sua ação bactericida e bacteriostática ajuda a reduzir a placa bacteriana, controlar gengivites e auxiliar no tratamento de aftas e periodontites.

📌 Modo de uso:
Utilizar conforme orientação odontológica. 
Enxaguar a boca com aproximadamente 15 ml da solução, por 30 segundos, duas vezes ao dia, sem diluir em água. 
Evite ingerir alimentos ou bebidas logo após o uso.

⚠️ Advertências:
Não engolir a solução. 
O uso contínuo por longos períodos pode causar escurecimento temporário dos dentes e alteração do paladar. 
Evite o uso em crianças pequenas sem recomendação profissional. 
Armazene em local fresco e protegido da luz.`,
  dosagem: "0.12%",
  estoque: 40,
  forma: "Solução bucal",
  funcao: "Antisséptico bucal",
  categoria: "Odontológicos",
  imageUrl: "https://images.tcdn.com.br/img/img_prod/800866/clorexidina_0_12_chlorclear_250ml_antisseptico_bucal_vicpharma_10167_1_6120b74b7e59b4b8c04d72b98fa9fb4c.jpg",
  preco: 22.9,
  maisPesquisado: false,
  topDoMomento: false,
  popularidade: 4
},
{
  id: "88",
  nome: "Lágrima Artificial",
  descricao: "Lubrificante ocular",
  descricaoDetalhada: `A Lágrima Artificial 3 mg/ml é um lubrificante ocular utilizado para aliviar o ressecamento e o desconforto nos olhos causados por fatores como vento, ar condicionado, poluição ou uso prolongado de telas. 
Ela auxilia na reposição da umidade natural, formando uma película protetora sobre a superfície ocular e proporcionando hidratação e conforto duradouros.

📌 Modo de uso:
Instilar 1 ou 2 gotas no(s) olho(s) afetado(s) sempre que necessário ou conforme orientação médica. 
Evite o contato da ponta do frasco com os olhos ou outras superfícies para prevenir contaminação.

⚠️ Advertências:
Uso exclusivamente oftálmico. 
Interrompa o uso em caso de irritação, vermelhidão persistente ou alteração na visão. 
Mantenha o frasco bem fechado e armazene em local fresco e seco. 
Descarte o produto após o prazo de validade ou 30 dias após a abertura.`,
  dosagem: "3mg/ml",
  estoque: 45,
  forma: "Colírio",
  funcao: "Lubrificante ocular",
  categoria: "Oftálmicos",
  imageUrl: "https://cdn.awsli.com.br/600x450/1108/1108140/produto/45727806/4a0ea3c8b8.jpg",
  preco: 15.9,
  maisPesquisado: false,
  topDoMomento: true,
  popularidade: 4
},
{
  id: "89",
  nome: "Ofloxacino Colírio",
  descricao: "Antibiótico oftálmico",
  descricaoDetalhada: `O Ofloxacino Colírio 3 mg/ml é um antibiótico oftálmico pertencente à classe das fluoroquinolonas, 
indicado para o tratamento de infecções oculares externas causadas por bactérias sensíveis, como conjuntivites e ceratites bacterianas. 
Seu mecanismo de ação atua inibindo a multiplicação bacteriana, auxiliando na eliminação da infecção e na recuperação da saúde ocular.

📌 Modo de uso:
Instilar 1 ou 2 gotas no(s) olho(s) afetado(s), conforme prescrição médica, geralmente de 4 em 4 horas durante os primeiros dias, podendo ser reduzida conforme evolução clínica.

⚠️ Advertências:
Uso exclusivamente oftálmico. 
Evite o contato da ponta do frasco com os olhos ou outras superfícies para prevenir contaminação. 
Interrompa o uso e procure orientação médica se houver irritação ocular persistente, vermelhidão ou piora dos sintomas.`,
  dosagem: "3mg/ml",
  estoque: 30,
  forma: "Colírio",
  funcao: "Antibiótico oftálmico",
  categoria: "Oftálmicos",
  imageUrl: "https://images.webfarmas.com.br/7896004713830.jpg",
  preco: 28.9,
  maisPesquisado: false,
  topDoMomento: false,
  popularidade: 3
},
{
  id: "9",
  nome: "Diclofenaco 50mg",
  descricao: "Anti-inflamatório para dores articulares",
  descricaoDetalhada: `O Diclofenaco 50 mg é um medicamento anti-inflamatório não esteroidal (AINE) indicado para o tratamento de dores e inflamações associadas a condições musculoesqueléticas, 
como artrite, bursite, tendinite e dores articulares em geral. Possui também ação analgésica e antipirética, auxiliando no alívio de desconfortos e na melhora da mobilidade.

📌 Modo de uso:
Tomar conforme prescrição médica, geralmente um comprimido duas a três vezes ao dia, preferencialmente após as refeições para evitar irritação gástrica.

⚠️ Advertências:
Evite o uso prolongado sem acompanhamento médico. 
Pessoas com histórico de úlcera, gastrite, doença renal, hepática ou cardiovascular devem utilizar com cautela. 
Interrompa o uso e procure o médico se surgirem reações gastrointestinais ou cutâneas.`,
  dosagem: "50mg",
  estoque: 70,
  forma: "Comprimido",
  funcao: "Anti-inflamatório",
  categoria: "Dor e Inflamação",
  imageUrl: "https://portal.zilfarma.com/9783-thickbox_default/diclofenaco-sodico-50mg-20comp-altefar.webp",
  preco: 12.9,
  maisPesquisado: false,
  topDoMomento: false,
  popularidade: 3
},
{
  id: "90",
  nome: "Timolol Colírio",
  descricao: "Tratamento de glaucoma",
  descricaoDetalhada: `O Timolol Colírio 5 mg/ml é um medicamento antiglaucomatoso pertencente à classe dos betabloqueadores, 
indicado para o tratamento do glaucoma e da hipertensão ocular. Atua reduzindo a pressão intraocular ao diminuir a produção de humor aquoso, 
ajudando a prevenir danos ao nervo óptico e perda de visão.

📌 Modo de uso:
Instilar 1 gota no(s) olho(s) afetado(s), geralmente uma ou duas vezes ao dia, conforme prescrição médica. 
Após a aplicação, pressionar levemente o canto do olho por alguns segundos para reduzir a absorção sistêmica.

⚠️ Advertências:
Uso exclusivamente oftálmico. 
Informe ao médico em caso de doenças respiratórias, cardíacas ou uso de outros betabloqueadores. 
Não interrompa o uso sem orientação médica, pois a suspensão abrupta pode aumentar a pressão intraocular.`,
  dosagem: "5mg/ml",
  estoque: 25,
  forma: "Colírio",
  funcao: "Antiglaucomatoso",
  categoria: "Oftálmicos",
  imageUrl: "https://santaluciadrogaria.vtexassets.com/arquivos/ids/157482/7896004715711.png?v=637637991796370000",
  preco: 18.9,
  maisPesquisado: false,
  topDoMomento: false,
  popularidade: 3
},
{
  id: "91",
  nome: "Otosporin",
  descricao: "Antibiótico otológico",
  descricaoDetalhada: `O Otosporin é um antibiótico otológico indicado para o tratamento de otites externas e infecções do canal auditivo causadas por bactérias sensíveis. 
A formulação combina antibióticos e corticoide, proporcionando ação antibacteriana e anti-inflamatória, reduzindo a dor, o inchaço e o desconforto local.

📌 Modo de uso:
Aplicar conforme prescrição médica, geralmente 2 a 3 gotas no ouvido afetado, de 2 a 4 vezes ao dia. 
A solução deve ser aquecida em temperatura ambiente antes da aplicação e administrada com o paciente deitado, mantendo a posição por alguns minutos após o uso.

⚠️ Advertências:
Uso exclusivamente otológico. 
Evite o contato com os olhos e não utilize em casos de perfuração do tímpano. 
Se houver irritação, dor intensa ou reações alérgicas, interrompa o uso e procure orientação médica. 
O tratamento não deve ser prolongado sem acompanhamento profissional.`,
  dosagem: "Múltipla",
  estoque: 30,
  forma: "Gotas",
  funcao: "Antibiótico otológico",
  categoria: "Otológicos",
  imageUrl: "https://tfcvgc.vtexassets.com/arquivos/ids/326311/FQM-otosporin-hidrocortisona-10ml.jpg?v=638738383010400000",
  preco: 32.9,
  maisPesquisado: false,
  topDoMomento: false,
  popularidade: 3
},
{
  id: "92",
  nome: "Cerumin",
  descricao: "Ceruminolítico",
  descricaoDetalhada: `O Cerumin 50 mg/ml é um medicamento ceruminolítico indicado para amolecer e facilitar a remoção do cerume (cera) do ouvido. 
Age dissolvendo e fragmentando o acúmulo de cera, auxiliando na limpeza do conduto auditivo externo e na prevenção de tampões de cerume.

📌 Modo de uso:
Aplicar conforme orientação médica ou farmacêutica, geralmente 3 a 5 gotas no ouvido afetado, mantendo a cabeça inclinada por alguns minutos para melhor penetração. 
Se necessário, o excesso pode ser suavemente removido com gaze ou papel absorvente limpo.

⚠️ Advertências:
Uso exclusivamente otológico. 
Não utilizar em casos de perfuração do tímpano, otite média ou presença de dor e secreção no ouvido. 
Evite o uso prolongado e não introduza objetos no canal auditivo. 
Em caso de irritação ou desconforto, suspenda o uso e procure orientação médica.`,
  dosagem: "50mg/ml",
  estoque: 35,
  forma: "Gotas",
  funcao: "Ceruminolítico",
  categoria: "Otológicos",
  imageUrl: "https://uploads.consultaremedios.com.br/product_variation_images/full/3d051a7465b5470ad7de8b58012b31a46eae59b0.jpg?1672947909",
  preco: 25.9,
  maisPesquisado: false,
  topDoMomento: false,
  popularidade: 3
},
{
  id: "93",
  nome: "Alendronato 70mg",
  descricao: "Tratamento de osteoporose",
  descricaoDetalhada: `O Alendronato 70 mg é um medicamento da classe dos bisfosfonatos, indicado para o tratamento e prevenção da osteoporose em homens e mulheres, principalmente após a menopausa. 
Sua ação reduz a reabsorção óssea, ajudando a aumentar a densidade mineral dos ossos e diminuindo o risco de fraturas.

📌 Modo de uso:
Tomar conforme prescrição médica, geralmente um comprimido uma vez por semana, em jejum, com um copo cheio de água. 
Após a ingestão, evitar deitar-se por pelo menos 30 minutos e não ingerir alimentos, bebidas ou outros medicamentos nesse período.

⚠️ Advertências:
Não utilizar em casos de hipocalcemia ou distúrbios do esôfago que dificultem o trânsito dos comprimidos. 
Pode causar irritação gástrica; por isso, siga corretamente as instruções de administração. 
Mantenha acompanhamento médico e ingestão adequada de cálcio e vitamina D durante o tratamento.`,
  dosagem: "70mg",
  estoque: 40,
  forma: "Comprimido",
  funcao: "Antirreabsortivo ósseo",
  categoria: "Ortopédicos",
  imageUrl: "https://santaluciadrogaria.vtexassets.com/arquivos/ids/158350/7897595610096.png?v=637638012002270000",
  preco: 28.9,
  maisPesquisado: false,
  topDoMomento: false,
  popularidade: 3
},
{
  id: "94",
  nome: "Condroitina + Glucosamina",
  descricao: "Protetor articular",
  descricaoDetalhada: `A Condroitina + Glucosamina (500 mg + 400 mg) é um suplemento indicado para apoiar a saúde das articulações e auxiliar na regeneração da cartilagem. 
As duas substâncias atuam em conjunto para melhorar a lubrificação articular, reduzir o desgaste das articulações e aliviar dores associadas a osteoartrite e outras condições degenerativas.

📌 Modo de uso:
Tomar conforme orientação médica ou nutricional, geralmente uma cápsula duas vezes ao dia, junto às refeições, com um copo de água.

⚠️ Advertências:
O uso deve ser supervisionado por um profissional de saúde, especialmente em pacientes diabéticos, alérgicos a crustáceos ou com distúrbios renais. 
Não é recomendado para menores de idade sem acompanhamento médico. 
Os resultados podem variar conforme o tempo e a regularidade do uso.`,
  dosagem: "500mg+400mg",
  estoque: 35,
  forma: "Cápsula",
  funcao: "Protetor articular",
  categoria: "Ortopédicos",
  imageUrl: "https://m.media-amazon.com/images/I/51TSSo1IzUL._AC_UF1000,1000_QL80_.jpg",
  preco: 65.9,
  maisPesquisado: false,
  topDoMomento: false,
  popularidade: 4
},
{
  id: "95",
  nome: "Colágeno Tipo 2",
  descricao: "Suplemento para articulações",
  descricaoDetalhada: `O Colágeno Tipo 2 40 mg é um suplemento alimentar indicado para auxiliar na manutenção da saúde das articulações, 
melhorando a flexibilidade, reduzindo a rigidez e contribuindo para a regeneração das cartilagens. 
O colágeno tipo 2 não desnaturado atua como suporte estrutural natural, ajudando a preservar a integridade das articulações e prevenir desconfortos relacionados ao desgaste articular.

📌 Modo de uso:
Consumir conforme orientação médica ou nutricional, geralmente uma cápsula ao dia, de preferência em jejum.

⚠️ Advertências:
O uso deve ser supervisionado por um profissional de saúde, especialmente em pessoas com doenças autoimunes ou alergias alimentares. 
Não exceder a dose recomendada. 
Este produto não substitui uma alimentação equilibrada e hábitos saudáveis.`,
  dosagem: "40mg",
  estoque: 25,
  forma: "Cápsula",
  funcao: "Suplemento articular",
  categoria: "Ortopédicos",
  imageUrl: "https://sanavita.vtexassets.com/arquivos/ids/158317-800-auto?v=638975929723230000&width=800&height=auto&aspect=true",
  preco: 89.9,
  maisPesquisado: true,
  topDoMomento: false,
  popularidade: 4
},
{
  id: "96",
  nome: "Água Oxigenada 10 vol",
  descricao: "Antisséptico",
  descricaoDetalhada: `A Água Oxigenada 10 vol é uma solução antisséptica indicada para a higienização e desinfecção de ferimentos e pequenas lesões cutâneas. 
Também pode ser utilizada para limpeza de pele e assepsia geral, ajudando a eliminar micro-organismos e prevenir infecções. 
Sua ação ocorre por meio da liberação de oxigênio, que remove impurezas e auxilia na oxigenação dos tecidos.

📌 Modo de uso:
Aplicar sobre o local afetado utilizando algodão ou gaze esterilizada, conforme necessidade ou orientação médica. 
Uso externo.

⚠️ Advertências:
Evite o contato com os olhos e mucosas. 
Não ingerir e não aplicar em grandes áreas da pele ou feridas profundas. 
Armazene em local fresco, protegido da luz e longe do alcance de crianças.`,
  dosagem: "10 volumes",
  estoque: 100,
  forma: "Solução",
  funcao: "Antisséptico",
  categoria: "Primeiros Socorros",
  imageUrl: "https://www.callfarma.com.br/_next/image?url=https%3A%2F%2Fd2lakedouw4zad.cloudfront.net%2Ffarmax-agua-oxigenada-10-vol-100ml-51500.png&w=640&q=75",
  preco: 3.9,
  maisPesquisado: false,
  topDoMomento: false,
  popularidade: 3
},
{
  id: "97",
  nome: "Iodo Povidona",
  descricao: "Antisséptico tópico",
  descricaoDetalhada: `O Iodo Povidona 10% é um antisséptico tópico amplamente utilizado para a assepsia da pele e desinfecção de ferimentos, cortes superficiais e escoriações. 
Sua formulação à base de iodopovidona possui ação contra bactérias, fungos e vírus, auxiliando na prevenção de infecções e na cicatrização de lesões cutâneas.

📌 Modo de uso:
Aplicar uma pequena quantidade da solução sobre a área afetada, utilizando algodão ou gaze esterilizada, conforme necessidade ou orientação médica. 
Uso exclusivamente externo.

⚠️ Advertências:
Evite o contato com os olhos e mucosas. 
Não utilizar em pessoas com sensibilidade ao iodo ou em lesões muito extensas sem supervisão médica. 
Armazene em local fresco, protegido da luz e bem fechado após o uso. 
Em caso de irritação ou vermelhidão persistente, suspenda o uso e procure orientação médica.`,
  dosagem: "10%",
  estoque: 80,
  forma: "Solução",
  funcao: "Antisséptico",
  categoria: "Primeiros Socorros",
  imageUrl: "https://hospitalar.vtexassets.com/arquivos/ids/175853/iodo-dermo-suave-pvpi-100.jpg?v=638333172326470000",
  preco: 8.9,
  maisPesquisado: false,
  topDoMomento: false,
  popularidade: 4
},
{
  id: "98",
  nome: "Soro Fisiológico",
  descricao: "Solução salina",
  descricaoDetalhada: `O Soro Fisiológico 0.9% é uma solução salina estéril indicada para limpeza, hidratação e assepsia de ferimentos, mucosas, lentes de contato e vias nasais. 
É amplamente utilizado em primeiros socorros, procedimentos médicos e cuidados diários, por ser isotônico e compatível com os tecidos do corpo.

📌 Modo de uso:
Aplicar diretamente sobre a área a ser higienizada, utilizando gaze esterilizada ou conforme orientação médica. 
Pode ser usado para lavagem nasal, ocular ou de ferimentos superficiais. 
Uso externo e conforme necessidade.

⚠️ Advertências:
Produto estéril de uso único após aberto — descarte o restante. 
Evite o contato do bico do frasco com qualquer superfície para prevenir contaminação. 
Armazene em local limpo, fresco e protegido da luz.`,
  dosagem: "0.9%",
  estoque: 120,
  forma: "Solução",
  funcao: "Limpeza e hidratação",
  categoria: "Primeiros Socorros",
  imageUrl: "https://cdn.dentalcremer.com.br/produtos/550/soro-fisiologico-sorimax-500ml-farmax-121319-dc.jpg",
  preco: 4.9,
  maisPesquisado: false,
  topDoMomento: true,
  popularidade: 5
},
{
  id: "99",
  nome: "Cafeína 200mg",
  descricao: "Estimulante",
  descricaoDetalhada: `A Cafeína 200 mg é um suplemento estimulante indicado para aumentar a disposição física e mental, melhorar o foco e contribuir para a queima de gordura. 
Seu efeito termogênico ajuda a acelerar o metabolismo e potencializar o desempenho em atividades físicas, sendo amplamente utilizada por atletas e praticantes de exercícios.

📌 Modo de uso:
Consumir conforme recomendação médica ou nutricional, geralmente uma cápsula ao dia, cerca de 30 a 60 minutos antes do treino ou atividade física. 
A dosagem pode variar conforme a sensibilidade individual e objetivos do usuário.

⚠️ Advertências:
Evite o consumo à noite, pois pode causar insônia ou agitação. 
Não exceder a dose recomendada. 
Pessoas com hipertensão, problemas cardíacos, ansiedade ou sensibilidade à cafeína devem utilizar com cautela e sob orientação profissional.`,
  dosagem: "200mg",
  estoque: 45,
  forma: "Cápsula",
  funcao: "Estimulante",
  categoria: "Termogênicos",
  imageUrl: "https://www.gsuplementos.com.br/upload/produto/imagem/cafe-na-200mg-120-caps-growth-supplements-termog-nico.png",
  preco: 25.9,
  maisPesquisado: false,
  topDoMomento: false,
  popularidade: 4
},















];

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ListaMedicamento medicamentos={medicamentos} />} />
        <Route path="/detalhes/:id" element={<DetalheMedicamento />} />
      </Routes>
    </Router>
  );
}
