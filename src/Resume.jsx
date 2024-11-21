export default function Resume({ education, generalInfo, skills }) {
  return (
    <div className="bg-white shadow-md rounded-md flex flex-col items-center w-[8.5in] h-[11in] font-serif gap-0">
      <p className="text-3xl font-bold mt-[0.5in]">
        {generalInfo.first + " " + generalInfo.last}
      </p>
      <div className="flex justify-center gap-2 w-[6.5in] ">
        <p className="w-max text-nowrap">{generalInfo.email}</p>
        <p>&#9670;</p>
        <p className="w-max text-nowrap">{generalInfo.number}</p>
        <p>&#9670;</p>
        <p className="w-max text-nowrap">{generalInfo.location}</p>
        <p>&#9670;</p>
        <a
          href={`https://www.${generalInfo.website}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-max text-nowrap"
        >
          {generalInfo.website}
        </a>
      </div>
      <div className="flex flex-col w-[7.5in] gap-0 flex-grow-0">
        <div>
          <p className="font-bold mt-5">Education</p>
          <hr className="border-black border-t-2 w-full"></hr>
          {education.map((edu) => (
            <div key={edu.id}>
              <div className="flex justify-between font-bold">
                <p>{edu.school}</p>
                <p>{edu.date}</p>
              </div>
              <div className="flex justify-between italic">
                {edu.major !== "" ? (
                  <p>{edu.degree + " in " + edu.major}</p>
                ) : (
                  <p>{edu.degree}</p>
                )}
                <p>{edu.location}</p>
              </div>
              <div className="font-bold mb-5">
                {edu.gpa !== "" && <p>{`▪ GPA: ` + edu.gpa}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col w-[7.5in] gap-0 flex-grow-0">
        <div>
          <p className="font-bold">Skills</p>
          <hr className="border-black border-t-2 w-full"></hr>
          {skills.map((skillset) => (
            <div key={skillset.id}>
              <div className="flex gap-1">
                {skillset.section !== "" && (
                  <>
                    <p className="font-bold ">{`▪ ${skillset.section}:`}</p>
                    <p>{skillset.skill.toString().split(",").join(", ")}</p>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col w-[7.5in] gap-0 flex-grow-0">
        <div>
          <p className="font-bold">Projects</p>
          <hr className="border-black border-t-2 w-full"></hr>
          {skills.map((skillset) => (
            <div key={skillset.id}>
              <p>skillset</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
