from bs4 import BeautifulSoup
import requests

url = requests.get('https://www.instagram.com/nclpaksoc/')
soup = BeautifulSoup(url.content, 'html.parser')
instagram_id = soup.find('div', class_='_ab8w  _ab94 _ab99 _ab9f _ab9m _ab9o _abcm')
print(instagram_id)
