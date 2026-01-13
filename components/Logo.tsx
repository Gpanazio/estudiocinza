import React from 'react';
import { Square } from 'lucide-react';

const Logo: React.FC = () => {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100vw',
      height: '100vh',
      backgroundColor: '#f0f0f0'
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '40px',
        transform: 'scale(4)'
      }}>
        <div style={{
          backgroundColor: 'black',
          color: 'white',
          padding: '1.5rem',
          borderRadius: '1rem'
        }}>
          <Square style={{ width: '4rem', height: '4rem', fill: 'currentColor' }} />
        </div>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          textAlign: 'left'
        }}>
          <span style={{
            fontSize: '2rem',
            fontWeight: 'bold',
            letterSpacing: '-0.1em',
            fontFamily: 'monospace',
            textTransform: 'uppercase',
            lineHeight: 1
          }}>
            Estúdio Cinza
          </span>
          <span style={{
            fontSize: '1rem',
            color: '#a0a0a0',
            textTransform: 'uppercase',
            letterSpacing: '0.2em',
            lineHeight: 1,
            marginTop: '0.5rem'
          }}>
            Rio de Janeiro
          </span>
        </div>
      </div>
    </div>
  );
};

export default Logo;
