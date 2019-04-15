import operator

def getClass(neighbors):
    #分类与评估函数#
     classVotes={}
     for x in range(len(neighbors)):
         instance_class=neighbors[x][-1]
         if instance_class in classVotes:
             classVotes[instance_class]+=1
         else:
             classVotes[instance_class]=1
         sortedVotes=sorted(classVotes.items(),key=operator.itemgetter(1),reverse=True)
     return sortedVotes[0][0]

def getAccuracy(testSet,predictions):
    #预测正确率计算#
    correct=0
    for x in range(len(testSet)):
        if testSet[x][-1]==predictions[x]:
            correct+=1
    return (correct/float(len(testSet)))*100.0