import Avatar from './avatar'
import Card from './card'

export default function App() {
  return (
    <div>
      <Card>
      <Avatar
        size={100}
        person={{ 
          name: 'Katsuko Saruhashi',
          imageId: 'YfeOqp2'
        }}
      />
    </Card>
    <Card>
    <Avatar
        size={100}
        person={{
          name: 'Aklilu Lemma', 
          imageId: 'OKS67lh'
        }}
      />
    </Card>
    <Card>
    <Avatar
        size={100}
        person={{ 
          name: 'Lin Lanying',
          imageId: '1bX5QH6'
        }}
      />
    </Card>
    </div>
  );
}
