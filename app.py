from flask import Flask, request, render_template
from src.svg import generate_svg

app = Flask(__name__)

@app.route('/')
def index():
  empty_selections = { 'primary': '', 'secondary': ''}
  svg = generate_svg(empty_selections)
  return render_template('index.html', svg=svg)

@app.route('/update', methods=['POST'])
def update():
  return generate_svg(request.form.to_dict())

if __name__ == '__main__':
  app.run(debug=True)
