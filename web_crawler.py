from bs4 import BeautifulSoup
import requests

url = requests.get('https://www.instagram.com/nclpaksoc/')
# print(url.text)
soup = BeautifulSoup(url.content, 'html.parser')
print(soup.prettify())
instagram_id = soup.find('div', class_="_aabd _aa8k _aanf")
print(instagram_id.a)