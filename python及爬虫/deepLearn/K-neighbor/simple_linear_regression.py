import matplotlib.pyplot as plt
from math import sqrt

dataset = [[1.2, 1.1], [2.4, 3.5], [4.1, 3.2], [3.4, 2.8], [5, 5.4]]


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


def evaluate_algorithm(dataset, algorithm):
    # 评估算法数据准备以及协调#
    test_set = list()
    for row in dataset:
        row_copy = list(row)
        row_copy[-1] = None
        test_set.append(row_copy)
    predicted = algorithm(dataset, test_set)
    for val in predicted:
        print('%.3f\t' % (val))
    actual = [row[-1] for row in dataset]
    rmse = rmse_metric(actual, predicted)
    return rmse


rmse = evaluate_algorithm(dataset, simple_linear_regression)
print('RMSE:%.3f' % (rmse))
# w0,w1=coefficients(dateset)
# print('w1=%.3f,w0=%.3f' %(w1,w0))
x1 = [row[0] for row in dataset]
y1 = [row[1] for row in dataset]
pre = simple_linear_regression(dataset, dataset)
plt.axis([0, 6, 0, 6])
plt.plot(x1, pre, 'b-')
plt.plot(x1, y1, 'bo')
plt.grid()
plt.show()
plt.savefig('scatter.png')
