var axios = require('axios');
var FormData = require('form-data');
var data = new FormData();
data.append('grant_type', 'authorization_code');
data.append('client_id', '1660');
data.append('client_secret', '5kSy9YPuiE5RMd6RRI7OsX8iTG86OGJJhmKlMLqV');
data.append('redirect_uri', 'https://github.com/vitorbarreto46/teste.git');
data.append('code', 'def502003a2019de5cad6cb51f5095d22d91ca54ff0ddaac8345d27c56fc86aa1304e5e8df66efb797011faf97b236d6619ffaa24a0378ca137079aeb2450fca8a58f03395b3a5e34b71666c503282629c6b6124ae8748b660ae224c031a878107718943729d1f79f73426b443c7c7df991c8a64e8af84cc63f4f143a3a2e031188d219492e9547aa5dae0479619eaddedbe5f3c503c83f6c8bae3e9ca99d987aa4f5c5242dca0ba83ed57d80031406c6ce290136254bc09837c14948264e1521ddfaa1e230e61f96bb1e11e9a4afc26ea45050bda285534c4a3c71e46172f5f0dd71185c056f0fa622ca18beb678162502d7bb057dab5e4efdeb89a465233570f42253309430607b28a04eab1d7638364328a5a1c914fc4067dbdd1a5522379ed2dd040eb018d77bec35108ee79e9a3c5a6f3ca729f80335f287a1655e5ed11cde8ac461d37df995fab3abf8bb45901dbbb52f42ef33a0cc3266f603527d0b2363c922102a06c7f17030b84fd4400598e930f1ee1540dad0ebe581200e37fca2ad30e3d927964c956f1a6350d6dc395d689f09506cd5aab9e9553df699a5ec58a5465a2e4033f0a276e');

var config = {
  method: 'post',
  url: 'https://sandbox.melhorenvio.com.br/oauth/token',
  headers: { 
    'Accept': 'application/json', 
    'User-Agent': 'Aplicação (email para contato técnico)', 
    ...data.getHeaders()
  },
  data : data
};

