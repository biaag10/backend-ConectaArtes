const { execSync } = require('child_process');
const path = require('path');
const requestsDir = path.resolve(__dirname, '../requests');

describe('Execução dos Scripts de Requisição Shell', () => {
  const scripts = [
    'search-history/GET_SearchHistory.sh',
    'search-history/POST_SearchHistory.sh',
  ];

  scripts.forEach(scriptRelativePath => {
    const scriptFullPath = path.join(requestsDir, scriptRelativePath);
    const normalizedScriptPath = scriptFullPath.replace(/\\/g, '/');
    const testName = `deve executar ${scriptRelativePath} com sucesso`;

    it(testName, () => {
      try {
        const output = execSync(`\"${normalizedScriptPath}\"`, { stdio: "pipe", timeout: 15000 });
        expect(true).toBe(true); 
      } catch (error) {
        console.error(`Erro ao executar ${scriptRelativePath}:\nSaída Padrão:\n${error.stdout}\nErro Padrão:\n${error.stderr}`);
        throw new Error(`Falha ao executar ${scriptRelativePath}. Veja o console para detalhes.`);
      }
    });
  });
});

