from email.header import Header
from email.mime.text import MIMEText
from email.utils import parseaddr, formataddr

import smtplib


def _format_add(s):
    name, addr = parseaddr(s)
    return formataddr((Header(name, 'utf-8').encode(), addr))


# 发件人地址
from_addr = 'zhoujiaqing115@163.com'
# 邮箱密码
password = 'zjqshang115'
# 收件人地址
to_add = '1446373769@qq.com'
# 163网易邮箱服务器地址
smtp_server = 'smtp.163.com'
# 设置邮件信息

# 纯文本信息
msg = MIMEText('python爬虫异常，异常信息为HTTP 403', 'plain', 'utf-8')

# html邮件
# msg=MIMEText('<html><body><h1>Hello</h1>'+
#              '<p>异常网页<a href="http://www.cnlogs.com">cnlogs</a></p>'+
#              '</body></html>','html','utf-8')
msg['From'] = _format_add('一号爬虫<%s>' % from_addr)
msg['To'] = _format_add('管理员<%s>' % to_add)
msg['Subject'] = Header('一号爬虫运行状态', 'utf-8').encode()

# 发送邮件
server = smtplib.SMTP(smtp_server, 25)
server.login(from_addr, password)
server.sendmail(from_addr, [to_add], msg.as_string())
server.quit()
