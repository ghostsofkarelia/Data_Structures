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
	dfsInfo.push({distance:null,predecessor:null});
}

dfsInfo[source].distance=0;

var doDFS=function(graph,node)
{
    console.log(" Node processed "+node);
    for(var i=0;i<graph[node].length;i++)
    {
    	var temp=graph[node][i];
      console.log(" Here we are "+temp);
      if(dfsInfo[temp].distance===null)
      {
      	dfsInfo[temp].distance=dfsInfo[node].distance+1;
        dfsInfo[temp].predecessor=node;
        doDFS(graph,temp);
      }
    }
}

doDFS(graph,source);