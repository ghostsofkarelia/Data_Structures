/**
@author: Akshay Singh
JavaScript program for a DFS traversal using recursion. Maintains an adjacency list using a matrix. If visited then node distance and predecessor is not null
**/
graph=[[1,2],[3],[4,5],[],[],[]];
dfsInfo=[];
visited=[];
source=0;

for(var i=0;i<graph.length;i++)
{
	dfsInfo.push({distance:null,predecessor:null}); //All nodes are unvisited
}

dfsInfo[source].distance=0; //Source is the first one to visit

var doDFS=function(graph,node)
{
    console.log(" Node processed "+node);
    for(var i=0;i<graph[node].length;i++) //Visit neighbouring nodes
    {
      var temp=graph[node][i]; //Store the first neighbouring node
      if(dfsInfo[temp].distance===null) //If unvisited, visit
      {
      	dfsInfo[temp].distance=dfsInfo[node].distance+1; //Set distance
        dfsInfo[temp].predecessor=node; //Set predescessor
        doDFS(graph,temp); //Start with the first neigbouring node's neighbours
      }
    }
}

doDFS(graph,source);
