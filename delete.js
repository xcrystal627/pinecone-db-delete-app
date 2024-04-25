const {PineconeClient} = require('@pinecone-database/pinecone');

const { Configuration, OpenAIApi } = require("openai");
const { DeleteOperationRequest } =  require('@pinecone-database/pinecone');


async function initPinecone() {
  try {
     const pinecone = new PineconeClient();
     pinecone.projectName  = ''
     
     await pinecone.init({
        environment: '',
        apiKey: '', 
     });

     return pinecone;
  } catch (error) {
     console.log('error', error);
     throw new Error('Failed to initialize Pinecone Client');
  }
}

const main = async () => {
  
//   client = await initPinecone();

//   const index = client.Index('');
  
// //  await index.delete(option);
  // try {
  //   await index.delete1({deleteAll:true, namespace:'06abc8ef-f436-4617-a432-682a94e58206'})

  // } catch (error) {
  //   console.log(error)
  // }

// Set up your OpenAI API credentials


      try {

         const option = {
            deleteRequest : {
               namespace: '45e87ed3-0be2-41c5-8ee9-89d3b986f792',
               filter: {
                source:  {$in : ['2279763a-196d-496f-a7b4-a5a8d657ac61']}
               },
            }
         }

         const pinecone = await initPinecone();
         const index = pinecone.Index(');

         await index.delete1(option)

      } catch (error) {
         console.log(error)
      }


}



main();
