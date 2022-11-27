import React from 'react';
import './Tabs.css';

export default function Tabs() {
  return (
    <div className="bottom-list">
      <ul>
        <li className="bottom-lists">
          <a href="/weather" className="bottom-lists">
            Weather
          </a>
        </li>
        <li className="bottom-lists">
          <a href="/news" className="bottom-lists">
            News
          </a>
        </li>
        <li className="bottom-lists">
          <a href="/photos" className="bottom-lists">
            Photos
          </a>
        </li>
      </ul>
    </div>
  );
}
