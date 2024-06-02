from yattag import Doc

__all__ = ['generate_svg']

def generate_svg(selections):
  print(selections)

  doc, tag, _, line = Doc().ttl()

  with tag('svg', klass='boxes', width=600, height=100):
    for i in range(6):
      x = 20 + 80 * i
      doc.stag( 'rect'
              , klass = 'unselected'
              , id = i
              , x = x
              , y = 10
              , width = 50
              , height = 50
              , onclick = "rect_click(this, event.shiftKey)"
              )

  return doc.getvalue()
