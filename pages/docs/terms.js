import React, { useEffect, useState } from 'react'

// redux
import { useDispatch } from 'react-redux'

// custom components
import PrimaryLayout from 'components/Layout/PrimaryLayout'

// styles
import globalStyles from 'styles/GlobalStyles.module.scss'
import styles from 'pages/docs/index.module.scss'

const TermsAndConditions = props => {
  // loading part ###########################
  const dispatch = useDispatch()
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    return () => setIsMounted(false)
  }, [])

  useEffect(() => {
    if (isMounted === true) {
      dispatch({ type: 'set', isLoading: false })
    }
  }, [isMounted, dispatch])
  // loading part end #######################

  // variables
  const { viewport } = props

  return (
    <div className={'flex justify-center'}>
      <div className={globalStyles.container}>
        <div className={viewport === 'mobile' ? styles.mobileTitle : styles.title}>Términos y condiciones</div>
        <div className={viewport === 'mobile' ? styles.mobileDivider : styles.divider} />
        <div className={viewport === 'mobile' && styles.mobileContent}>
          <div className={styles.text}>
            <p>
              <a href={'https://crysdyazandco.com/'}>https://crysdyazandco.com/</a>&nbsp; (en adelante, la Web) es un
              sitio web propiedad de Crody Salud S.L., en adelante EL PROPIETARIO, con CIF/NIF nº: B01907781 y domicilio
              social en: C/ Azalea, 1, Locales A y 2, Edificio F, Polígono Empresarial Minipark, C.P. 28109 – Alcobendas
              (Madrid).
            </p>
          </div>
          <br />
          <div className={styles.text}>
            El acceso, reproducción y uso de los servicios de la Web requiere la aceptación previa de las Condiciones de
            Uso vigentes en cada momento; EL PROPIETARIO se reserva el derecho de modificar dichas Condiciones cuando lo
            considere oportuno, mediante la publicación del nuevo texto en la Web.Es responsabilidad del usuario conocer
            las Condiciones de Uso antes de acceder a los productos y servicios de la Web; en caso de no estar conforme
            con las mismas, le rogamos, se abstenga de utilizarla.
          </div>
          <br />
          <div className={styles.text}>PROPIEDAD</div>
          <br />
          <div className={styles.text}>
            La Web es una obra compuesta de diversos elementos integrados e inseparables (texto, ilustraciones,
            fotografías, imágenes animadas, vídeos, programas de ordenador, incluidos los códigos html del sitio web,
            etc.), cuya Propiedad Intelectual le corresponde a EL PROPIETARIO, salvo en lo referente a aquellos
            materiales obtenidos bajo licencia de terceros.
          </div>
          <br />
          <div className={styles.text}>
            EL PROPIETARIO y sus licenciantes retienen en todo momento la Propiedad Intelectual sobre la Web y sobre los
            distintos elementos que la componen, individualmente considerados, en todas las copias que se realicen
            (cualquiera que sea el soporte al que se incorporen), concediendo sobre los mismos únicamente los derechos
            de uso que más adelante se describen. Cualquier derecho que no sea expresamente cedido se entiende
            reservado.
          </div>
          <br />
          <div className={styles.text}>
            Además de lo anterior, EL PROPIETARIO es responsable de la selección, diseño de la estructura y disposición
            de los contenidos de la Web, así como quien ha tomado la iniciativa y asumido el riesgo de efectuar las
            inversiones sustanciales orientadas a la obtención, digitalización y presentación de la misma,
            correspondiéndole, por tanto, la protección que el artículo 12 y el Título VIII del Libro II de la Ley de
            Propiedad Intelectual pueda conceder sobre el sitio web, considerado como una base de datos.
          </div>
          <br />
          <div className={styles.text}>
            EL PROPIETARIO es también el único dueño del diseño e imagen gráfica de la Web, reservándose las acciones
            legales pertinentes que le pudieran corresponder contra las personas que realicen imitaciones o usos
            desleales del mismo.
          </div>
          <br />
          <div className={styles.text}>CONTENIDOS WEB Y DESCARGAS. USOS PERMITIDOS Y PROHIBIDOS.</div>
          <br />
          <div className={styles.text}>Está permitida:</div>
          <br />
          <div className={styles.text}>
            La navegación por la Web, es decir, el acceso y visualización de la misma en un dispositivo, quedando
            autorizada cualquier reproducción temporal o accesoria, siempre que la misma no sea voluntaria y forme parte
            integrante y esencial del proceso tecnológico de transmisión. La navegación por determinadas secciones de la
            Web requieren el previo registro.
          </div>
          <br />
          <div className={styles.text}>
            Beneficiarse (previo registro), de los servicios y ventajas prestados por EL PROPIETARIO a través de la Web
            a sus usuarios, en las condiciones que se señalen expresamente en las distintas secciones.
          </div>
          <br />
          <div className={styles.text}>Queda terminantemente prohibido:</div>
          <br />
          <div className={styles.text}>
            Cualesquiera operaciones respecto de la Web, sus contenidos, los productos descargados y las copias de todos
            ellos que sean contrarias a la Ley, las buenas costumbres y la buena fe.
          </div>
          <br />
          <div className={styles.text}>
            Cualquier utilización fuera del ámbito personal y privado, especialmente aquellas que tengan fines
            comerciales o profesionales, incluido el envío de publicidad o mensajes y la recopilación y tratamiento de
            datos de terceros.
          </div>
          <br />
          <div className={styles.text}>
            Cualquier tipo de extracción, comunicación pública y/o transmisión, total o parcial, por cualquier medio,
            fuera del ámbito privado de uso permitido y, especialmente, su incorporación a cualquier otra obra,
            incluidas páginas web, colecciones o bases de datos. Se exceptúa de esta prohibición la publicación en
            medios de comunicación de los materiales susceptibles de descarga de la sección Sala de Prensa.
          </div>
          <br />
          <div className={styles.text}>
            La remoción, ocultación o falseamiento de los avisos y advertencias sobre la Propiedad Intelectual o
            Industrial de la Web o de cualquiera de los productos facilitados a través de la misma.
          </div>
          <br />
          <div className={styles.text}>
            Las operaciones y actividades expresamente prohibidas en cualesquiera otras secciones de estas Condiciones
            Generales y, en general, cualquiera que pueda perjudicar el normal funcionamiento de la Web, a otros
            usuarios o a cualquier tercero.
          </div>
          <br />
          <div className={styles.text}>LINKS A LA WEB</div>
          <br />
          <div className={styles.text}>
            Queda autorizado el establecimiento de vínculos e hipervínculos con la Web desde otras páginas o sitios web,
            siempre que los mismos no se hagan de forma que perjudique la imagen pública y de marca de EL PROPIETARIO,
            de la Web o de cualquiera de las personas y productos a que se haga referencia en la misma. En el
            establecimiento de vínculos con la Web queda expresamente prohibida la utilización de técnicas que impliquen
            confusión sobre la identidad y propiedad de los contenidos, tales como el framing u otras.
          </div>
          <br />
          <div className={styles.text}>
            Queda prohibido el establecimiento de vínculos desde páginas o sitios web cuyos contenidos promocionen o
            hagan apología, directa o indirectamente, de cualquier tipo de violencia, discriminación, pornografía o
            actividad ilegal. Asimismo, queda expresamente prohibido el establecimiento de links con fines mercantiles.
          </div>
          <br />
          <div className={styles.text}>
            En la creación de los vínculos queda expresamente prohibida la utilización de elementos extraídos de la Web,
            sin el consentimiento previo y expreso de EL PROPIETARIO
          </div>
          <br />
          <div className={styles.text}>
            En ningún caso podrá entenderse que los vínculos a la Web desde páginas o sitios web de terceros implican
            relaciones de EL PROPIETARIO con los titulares de éstos, ni implica respaldo, patrocinio o recomendación
            alguna de EL PROPIETARIO sobre los mismos, por lo que EL PROPIETARIO no será responsable en absoluto
            respecto de su contenido y licitud.
          </div>
          <br />
          <div className={styles.text}>CONTENIDOS Y COMPORTAMIENTO DEL USUARIO</div>
          <br />
          <div className={styles.text}>
            Como cliente o usuario de la Web, Ud. se compromete a hacer un uso adecuado de los contenidos y servicios
            ofrecidos a través de la misma y a no emplearlos para:
          </div>
          <br />
          <div className={styles.text}>
            Incurrir en actividades ilícitas, ilegales o contrarias a la buena fe y al orden público.
          </div>
          <br />
          <div className={styles.text}>
            Difundir contenidos o propaganda de carácter racista, xenófobo, pornográfico, que haga apología del
            terrorismo o que atente contra los derechos humanos.
          </div>
          <br />
          <div className={styles.text}>
            Provocar daños en los sistemas físicos y lógicos de EL PROPIETARIO, de sus proveedores o de terceras
            personas, introducir o difundir en la red virus informáticos o cualesquiera otros sistemas físicos o lógicos
            que sean susceptibles de provocar los daños anteriormente mencionados.
          </div>
          <br />
          <div className={styles.text}>
            Difundir contenidos que atenten contra la imagen y reputación de EL PROPIETARIO o de terceros.
          </div>
          <br />
          <div className={styles.text}>
            Atentar contra los derechos de Propiedad Intelectual, Industrial, de imagen, honor u otros que correspondan
            a EL PROPIETARIO o a terceros (queda expresamente prohibido hacer copia o grabación y divulgacion de las
            sesiones deportivas o del contenido suministrado digitalmente)
          </div>
          <br />
          <div className={styles.text}>
            EL PROPIETARIO tendrá plena libertad de decisión sobre si las colaboraciones y mensajes son finalmente
            publicadas en la Web o no, quedando facultada para retirarlos cuando estime oportuno.
          </div>
          <br />
          <div className={styles.text}>
            La infracción de cualquiera de las normas contenidas en estas Condiciones de uso y muy especialmente, de lo
            previsto en la presente cláusula, facultarán a EL PROPIETARIO para darle de baja de forma inmediata como
            usuario o suscriptor de la Web.
          </div>
          <br />
          <div className={styles.text}>SERVICIO DE ATENCIÓN AL CLIENTE</div>
          <br />
          <div className={styles.text}>
            De lunes a viernes de 10:00 a 19:00 ininterrumpidamente en el teléfono 650148244 o por e-mail a
            administracion@crysdyazandco.com
          </div>
          <br />
          <div className={styles.text}>PROTECCIÓN DE DATOS</div>
          <br />
          <div className={styles.text}>
            La información o datos personales que nos facilite serán tratados con arreglo a lo establecido en la
            Política de Privacidad. Al hacer uso de esta página web se consiente el tratamiento de dicha información y
            datos y se declara que toda la información o datos que nos facilite son veraces y se corresponden con la
            realidad.
          </div>
          <br />
          <div className={styles.text}>MODIFICACIONES</div>
          <br />
          <div className={styles.text}>
            EL PROPIETARIO se reserva el derecho de efectuar, sin previo aviso, las modificaciones que considere
            oportunas en la Web, pudiendo cambiar, suprimir o añadir tanto los contenidos y servicios que se presten a
            través de la misma, como la forma en la que éstos aparezcan presentados o localizados.
          </div>
          <br />
          <div className={styles.text}>
            Aunque EL PROPIETARIO pondrá sus mayores esfuerzos en mantener actualizada y libre de errores la información
            contenida en la Web, no ofrece garantía alguna respecto de su exactitud y puesta al día. Tampoco está
            garantizada la obtención de ningún resultado o fin concreto, por lo que el acceso y utilización de la Web,
            es de exclusiva responsabilidad de los usuarios y clientes.
          </div>
          <br />
          <div className={styles.text}>ACCIONES LEGALES</div>
          <br />
          <div className={styles.text}>
            EL PROPIETARIO perseguirá el incumplimiento de estas Condiciones de Uso, así como cualquier utilización
            indebida de la Web o de sus contenidos, las infracciones de los derechos que le correspondan a ella o a sus
            licenciantes, especialmente los de Propiedad Intelectual e Industrial, ejercitando todas las acciones,
            civiles y penales, que le puedan corresponder en Derecho.
          </div>
          <br />
          <div className={styles.text}>RESOLUCION EXTRAJUDICIAL DE CONFLICTOS</div>
          <br />
          <div className={styles.text}>
            Asimismo, en los términos que se recogen en el artículo 14 del Reglamento UE 524/2013, sobre resolución de
            litigios en materia de consumo, se proporciona un enlace directo a la plataforma de resolución de litigios
            en línea:&nbsp;
            <a href={'https://ec.europa.eu/consumers/odr/main/index.cfm'} className={styles.link}>
              https://ec.europa.eu/consumers/odr/main/index.cfm
            </a>
          </div>
          <br />
          <div className={styles.text}>LEY APLICABLE Y JURISDICCIÓN</div>
          <br />
          <div className={styles.text}>
            Para cualquier controversia o conflicto que pudiera surgir, derivado de estos términos o condiciones,
            resultará de aplicación la Ley Española. La resolución de los conflictos judiciales se someterá a la
            competencia de los Juzgados y Tribunales del domicilio del usuario o cliente.
          </div>
          <br />
          <div className={styles.text + ' mb-10'}>REV: 11/02/2021</div>
        </div>
      </div>
    </div>
  )
}
export default TermsAndConditions

TermsAndConditions.getLayout = function getLayout(page) {
  return <PrimaryLayout>{page}</PrimaryLayout>
}
