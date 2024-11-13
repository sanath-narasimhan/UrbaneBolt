import React from 'react';

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

const Team: React.FC = () => {
  const teamMembers: TeamMember[] = [
    {
      name: "John Doe",
      role: "CEO",
      image: "/team/emp1.jpg"
    },
    // Add more team members here
  ];

  return (
    <section className="py-16 bg-gray-50" id="team">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src={member.image} 
                alt={member.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team; 