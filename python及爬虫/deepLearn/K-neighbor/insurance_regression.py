import matplotlib.pyplot as plt
from random import seed
from random import randrange
from csv import reader
from math import sqrt

# dataset = [[1.2, 1.1], [2.4, 3.5], [4.1, 3.2], [3.4, 2.8], [5, 5.4]]

def load_csv(filename):
    dataset=list()
    with open(filename,'r') as file:
        csv_reader=reader(file)
        #读取表头数据X,Y#
        headings=next(csv_reader)
        #文件指针下移至真正数据#
        for row in csv_reader:
            if not row:#判断是否有空行如果有的话跳入下一行
                continue
            dataset.append(row)
        return dataset

def str_column_to_float(dataset,column):
    #将字符串列转换为浮点数
    for row in dataset:
        row[column]=float(row[column].strip())

def train_test_split(dataset,percent):
    #将数据集划分为训练集合和测试集合#
    train=list()
    train_size=percent*len(dataset)
    dataset_copy=list(dataset)
    while len(train)<train_size:
        index=randrange(len(dataset_copy))
        train.append(dataset_copy.pop(index))
    return train,dataset_copy

def mean(values):
    # 求均值#
    return sum(values) / float(len(values))


def variance(values, mean):
    # 求方差#
    return sum([(x - mean) ** 2 for x in values])


def covariance(x, x_mean, y, y_mean):
    # 求协方差#
    covar = 0.0
    for i in range(len(x)):
        covar += (x[i] - x_mean) * (y[i] - y_mean)
    return covar


def coefficients(dataset):
    # 求回归系数#
    x = [row[0] for row in dataset]
    y = [row[1] for row in dataset]
    x_mean, y_mean = mean(x), mean(y)
    w1 = covariance(x, x_mean, y, y_mean) / variance(x, x_mean)
    w0 = y_mean - w1 * x_mean
    return w0, w1


def rmse_metric(actrual, predicted):
    # 计算均方根误差#
    sum_error = 0.0
    for i in range(len(actrual)):
        predicted_error = predicted[i] - actrual[i]
        sum_error += (predicted_error ** 2)
    mean_error = sum_error / float(len(actrual))
    return sqrt(mean_error)


def simple_linear_regression(train, test):
    # 简单线性回归#
    predict = list()
    w0, w1 = coefficients(train)
    for row in test:
        y_model = w1 * row[0] + w0
        predict.append(y_model)
    return predict


def evaluate_algorithm(dataset, algorithm,split_percent,*args):
    # 评估算法数据准备以及协调#
    train,test=train_test_split(dataset,split_percent)
    test_set=list()
    for row in test:
        row_copy = list(row)
        row_copy[-1] = None
        test_set.append(row_copy)
    predicted = algorithm(train, test_set,*args)
    actual = [row[-1] for row in test]
    rmse = rmse_metric(actual, predicted)
    return rmse

seed(2)
#设置随机数种子，伪随机挑选训练和测试数据集做准备
filename='test.csv'
#导入保险数据并做数据分割准备
dataset=load_csv(filename)
for col in range(len(dataset[0])):
    str_column_to_float(dataset,col)

#设置数据集和分割百分比
percent=0.6
rmse=evaluate_algorithm(dataset,simple_linear_regression,percent)
print('RMSE:%.3f'%(rmse))

# x1 = [row[0] for row in dataset]
# y1 = [row[1] for row in dataset]
# pre = simple_linear_regression(dataset, dataset)
# plt.axis([0, 6, 0, 6])
# plt.plot(x1, pre, 'b-')
# plt.plot(x1, y1, 'bo')
# plt.grid()
# plt.show()
# plt.savefig('scatter.png')
