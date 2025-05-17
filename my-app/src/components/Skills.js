import skillsByCategory from '../Common/Skills.js';

export default function Skills() {
  return (
    <div id="skills" className="mt-14 flex flex-col items-start">
      <h2 className="text-5xl mb-8 self-center">Skills</h2>
      <div className="grid grid-cols-1">
        {skillsByCategory.map((categoryObj, index) => {
          return (
            <div className="mt-10" key={index}>
              <div className="text-3xl mb-2">{categoryObj.category}</div>
              <div className="gap-4 flex flex-wrap">
                {categoryObj.skills.map((skill, i) => (
                  <button
                    key={i}
                    className="bg-blue-400 text-white px-4 py-2 text-sm rounded shadow hover:bg-blue-500 transition"
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
