import pinecone

index_name = ""

pinecone.init(      
	api_key='',      
	environment=''      
)      

index = pinecone.Index(index_name=index_name)


filter_criteria = {
    "source":  {"$in" : ['2279763a-196d-496f-a7b4-a5a8d657ac61']}
}




# index.delete(filter=filter_criteria, namespace='45e87ed3-0be2-41c5-8ee9-89d3b986f792')

index.delete(delete_all=True ,namespace='63f3effe-2423-4565-ab58-0ac7b671e6f4')
