import math
import operator

def EuclidDist(instance1,instance2,len):
    #求欧几里得距离#
    distance=0.0
    for x in range(len):
        distance+=pow((instance1[x]-instance2[x]),2)
    return math.sqrt(distance)


def getNeighbors(trainSet,testInstance,k):
    #获取最近邻居#
    distance=[]
    length=len(testInstance)-1
    for x in range(len(trainSet)):
        dist=EuclidDist(testInstance,trainSet[x],length)
        distance.append((trainSet[x],dist))
    distance.sort(key=operator.itemgetter(1))
    #列表的sort（key）方法用来根据关键字排序
    neighbors=[]
    for x in range(k):
        neighbors.append(distance[x][0])
    return neighbors
trainSet=[[3,2,6,'a'],[1,2,4,'b'],[2,2,2,'b'],[1,5,4,'a']]
testInstance=[4,6,7]
k=1
neighbors=getNeighbors(trainSet,testInstance,1)
print("测试样本最近的邻居为:",neighbors)


