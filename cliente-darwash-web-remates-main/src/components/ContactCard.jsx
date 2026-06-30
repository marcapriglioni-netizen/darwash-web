import React from 'react';

export default function ContactCard({ contact }) {
  const { avatar, title, email, phone } = contact.fields;
  const avatarUrl = avatar?.fields?.file?.url;
  return (
    <div className="card mb-3">
      {/* eslint-disable-next-line */}
      {avatarUrl && <img src={avatarUrl} alt="" className="card-img-top" />}
      <div className="card-body">
        <h4>{title}</h4>
        <p className="card-text mb-0">{email}</p>
        <p className="card-text">{phone}</p>
        <a href={`https://wa.me/${phone}`} target="_blank" className="btn btn-success text-white" rel="noopener noreferrer">
          <i className="fa-brands fa-whatsapp"></i> Contactar
        </a>
      </div>
    </div>
  );
}
