import skillsByCategory from '../Common/Skills.js';

export default function Skills() {
  return (
    <div id="skills" className="mt-14 flex flex-col items-start">
      <h2 className="text-7xl mb-8 self-center">Skills</h2>
      <div className="grid grid-cols-1">
        {skillsByCategory.map((categoryObj, index) => {
          return (
            <div className="mt-10" key={index}>
              <div className="text-3xl mb-4">{categoryObj.category}</div>
              <div className="gap-4 flex flex-wrap">
                {categoryObj.skills.map((skill, i) => (
                  <button
                    key={i}
                    className="transform bg-pink-600 text-white px-4 py-2 text-lg rounded shadow transition-transform duration-300 hover:scale-110"
                  >
                    {skill}
                  </button>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
