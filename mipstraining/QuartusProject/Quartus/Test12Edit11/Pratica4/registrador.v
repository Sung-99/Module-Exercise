module registrador #(parameter WIDTH = 16) (
    input  [4:0] Read1, Read2, WriteReg,     // entradas de 5 bits para selecionar os registradores de leitura e escrita
	  input wire [WIDTH-1:0] WriteData, // entrada de 32 bits para o dado a ser escrito
    input wire RegWrite, clock, // entrada para habilitar escrita e sinal de clock
    
    output  reg [31:0] Data1, Data2// saídas de 32 bits para os dados lidos
);

    
  
  
	
   
    // BLOCO de definição de parâmetros
    parameter NUM_REGS = 32;  // Número de registradores
    parameter DATA_WIDTH = 32; // Largura de dados em bits

    // declaração do banco de registradores
    reg [DATA_WIDTH-1:0] registradores [NUM_REGS-1:0];

    
	 // BLOCO que vai inicializar os registradores com valor 0
    integer i; // variável usada no loop de inicialização
    initial begin
        for (i = 0; i < NUM_REGS; i = i + 1) begin
            registradores[i] = {DATA_WIDTH{1'b0}}; // atribui 0 a todos os registradores
        end
    end
		initial begin
			registradores[8] = 32'h00000002; // Example instruction 3
			registradores[9] = 32'h00000003;
			registradores[2] = 32'h00000003;
			registradores[6] = 32'h00000001;
			//registradores[3] = 32'h00000002;
			registradores[4] = 32'h00000000;
			registradores[5] = 32'h00000000;
			//registradores[5] = 32'h00000004;
			//registradores[7] = 32'h00000000;
			
		end
	 // BLOCO de leitura assíncrona dos registradores
    // Data1 e Data2 são atualizados sempre que os índices de leitura (Read1 e Read2) mudam
    always @(*) begin
		if(Read1)begin
        Data1 = registradores[Read1]; // lê o valor do registrador selecionado por Read1
       end
		  
		if(Read2) begin  
		  Data2 = registradores[Read2]; // lê o valor do registrador selecionado por Read1
       end   
	 
	 end

    // BLOCO de escrita sincronizada no registrador
    // a escrita no banco de registradores ocorre apenas na borda positiva do clock, e somente se o sinal RegWrite estiver ativado
    always @(posedge clock) begin
        if (RegWrite != 0) begin // para não escrever no registrador 0	
		   
            registradores[WriteReg] <= WriteData; // escreve o dado no registrador selecionado por WriteReg
			
		  
		  
		  end
		   
    end
	  


endmodule