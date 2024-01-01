import { LiaPenFancySolid } from "react-icons/lia";

function ArticleDetails({articles}){
  return (
    <div className="w-[1264px] h-4/6">
        <div className="W-4/5 py-4 px-6 flex flex-col flex-wrap justify-center content-center bg-[#DEDEDE] font-poppins">
            <div className="flex justify-center sm:mb-3 mb-5">
                <h1 className="sm:text-3xl text-6xl font-meduim"> {articles.titre}</h1>
            </div>

            <hr className="bg-[#E87D00] h-1 sm:h-0.5 w-full rounded-full border-none sm:mb-0 mb-4"/>

            <div className="flex justify-center mb-3 flex-col sm:px-4 px-6">
                <div className="flex content-center flex-nowrap my-3">
                    <LiaPenFancySolid  className="sm:h-6 h-10 sm:w-6 w-10 sm:mr-1 mr-2"/>
                    <p className='text-[#190B28] text-3xl sm:text-base font-semibold mr-1'>Auteurs:</p>
                    <p className='text-[#190B28] text-3xl sm:text-base '>
                        {articles.auteurs.map(auteur =>{
                                return(auteur.nom + " " + auteur.prenom + ". ")
                        })};
                    </p>
                </div>

                <div className="flex content-center flex-nowrap">
                    <LiaPenFancySolid  className="sm:h-6 sm:w-6 h-10 w-10 sm:mr-1 mr-2"/>
                    <p className='text-[#190B28] text-3xl sm:text-base font-semibold mr-1'>Institutions:</p>
                    <p className='text-[#190B28] text-3xl sm:text-base '>
                        {articles.auteurs.map(auteur =>{
                            return(auteur.institutions.map(institu=>{
                                return(institu.nom_institution + " ")
                            }));
                        })}
                    </p>
                </div>

                <div className="flex content-center flex-nowrap my-3">
                    <LiaPenFancySolid  className="sm:h-6 sm:w-6 h-10 w-10 sm:mr-1 mr-2"/>
                    <p className='text-[#190B28] text-3xl sm:text-base font-semibold mr-1'>Mots clés:</p>
                    <p className='text-[#190B28] text-3xl sm:text-base '>
                        {articles.mot_cle.map(article => {
                            return(article + " ")
                                }
                        )}
                    </p>
                </div>
            </div>

            <hr className="bg-[#E87D00] h-1 sm:h-0.5 w-full rounded-full border-none sm:mb-0 mb-4"/>

            <div className="flex justify-center mb-3 flex-col sm:px-4 px-6 py-2">
                <p className="text-5xl sm:text-3xl font-meduim sm:my-2 mb-4 mx-1">Abstract:</p>
                <p className='text-[#190B28] text-3xl sm:text-sm'>{articles.resume} </p>
            </div>

            <hr className="bg-[#E87D00] h-1 sm:h-0.5 w-full rounded-full border-none sm:mb-0 mb-4"/>

        </div>
    </div>
  );
};

export default ArticleDetails;