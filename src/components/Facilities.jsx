import { Typography, Box, Table, Paper, TableRow, TableHead, TableContainer, TableCell, TableBody } from "@mui/material"

import hardware2 from '../assets/hardware2.jpg'
import hardware3 from '../assets/hardware3.jpg'
import hardware4 from '../assets/hardware4.jpg'
import hardware5 from '../assets/hardware5.jpeg'
import Cadence from   '../assets/Cadence.jpg'
import Vivado from '../assets/Vivado.jpg'
import Mentor from '../assets/Mentor.jpg'
import labview from '../assets/labview.png'
import Nexys from '../assets/Nexys.png'

const rows = [
    {
        name : 'Nexys 4 DDR Artix-7 FPGA',
        desc : 'The Nexys 4 DDR board is a complete, ready-to-use digital circuit development platform based on the latest Artix-7™ Field Programmable Gate Array (FPGA) from Xilinx®. With its large, high-capacity FPGA (Xilinx part number XC7A100T-1CSG324C), generous external memories, and collection of USB, Ethernet, and other ports, the Nexys4 DDR can host designs ranging from introductory combinational circuits to powerful embedded processors. Several built-in peripherals, including an accelerometer, temperature sensor, MEMs digital microphone, a speaker amplifier, and several I/O devices allow the Nexys4 DDR to be used for a wide range of designs without needing any other components',
        img : Nexys
    },    
    {
        name : 'Basys-3 FPGA Board',
        desc : 'The Basys-3 is an entry-level FPGA development board designed exclusively for the Vivado® Design Suite featuring the Xilinx® Artix®-7-FPGA architecture. Basys-3 is the newest addition to the popular Basys line of FPGA development boards for students or beginners just getting started with FPGA technology. Board has complete ready-to-use hardware, a large collection of on-board I/O devices, all required FPGA support circuits and development tools.',
        img : hardware2
    },
    {
        name : 'Analog Discovery 2 with parts kit',
        desc : 'Digilent Analog Discovery 2 is a USB oscilloscope and multi-function instrument that allows users to measure, visualize, generate, record, and control mixed-signal circuits of all kinds. Analog Discovery 2 is small enough to fit in a pocket, but powerful enough to replace a stack of lab equipment, providing engineering students, hobbyists and electronics enthusiasts the freedom to work with analog and digital circuits in virtually any environment, in or out of the lab.',
        img : hardware3
    },
    {
        name : 'Analog Discovery 100MS/s USB Oscilloscope and Logic Analyzer',
        desc : 'Digilent Analog Discovery 2 is a USB oscilloscope and multi-function instrument that allows users to measure, visualize, generate, record, and control mixed-signal circuits of all kinds. Analog Discovery 2 is small enough to fit in a pocket, but powerful enough to replace a stack of lab equipment, providing engineering students, hobbyists and electronics enthusiasts the freedom to work with analog and digital circuits in virtually any environment, in or out of the lab.',
        img : hardware5
    },
    {
        name : 'NI digital electronics FPGA board',
        desc : 'The NI Digital Electronics FPGA Board Software is driver software for supported Digilent add-on application boards for the NI Engineering Laboratory Virtual Instrumentation Suite. You can program the FPGA with the LabVIEW FPGA Module or with Xilinx ISE tools.NI ELVIS is an educational design and prototyping platform from National Instruments Corp. based on NI Lab VIEW graphical system design software. The platform is used for teaching concepts in areas such as instrumentation, circuits, control, communication, and embedded design in a hands-on, interactive manner.',
        img : hardware4
    },
    {
        name : 'Cadence EDA Tools Set' ,
        desc : 'Custom IC technologies - Virtuoso Platform - Tools for designing full-custom integrated circuits;[9] includes schematic entry, behavioral modeling (Verilog-AMS), circuit simulation, custom layout, physical verification, extraction and back- annotation. Used mainly for analog, mixed-signal, RF, and standard-cell designs, but also memory and FPGA designs. Digital & Signoff technologies - RTL to GDS II implementation: Genus Synthesis, Joules Power Analysis, Innovus Place & Route, Tempus Timing SIgnoff, Voltus Power Integrity Signoff, Modus Automatic Test Pattern Generation.',
        img : Cadence
    },
    {
        name : 'Xilinx Vivado Design Suite' ,
        desc : 'Custom IC technologies - Virtuoso Platform - Tools for designing full-custom integrated circuits;[9] includes schematic entry, behavioral modeling (Verilog-AMS), circuit simulation, custom layout, physical verification, extraction and back- annotation. Used mainly for analog, mixed-signal, RF, and standard-cell designs, but also memory and FPGA designs. Digital & Signoff technologies - RTL to GDS II implementation: Genus Synthesis, Joules Power Analysis, Innovus Place & Route, Tempus Timing SIgnoff, Voltus Power Integrity Signoff, Modus Automatic Test Pattern Generation.',
        img : Vivado
    },
    {
        name : 'Mentor Graphics EDA Tool Set',
        desc : 'Integrated circuit layout full - custom and SDL tools such as IC Station IC Place and route tool - Olympus-SoC IC Verification tools such as Calibre nmDRC, Calibre nmLVS, Calibre xRC, Calibre xACT Schematic editors for electronic schematics such as Design Architect IC or DxDesigner Layout and design tools for printed circuit boards with programs such as PADS, Xpedition Enterprise and Board Station Component library management tools IP cores for ASIC and FPGA designs',
        img : Mentor
    },
    {
        name : 'Lab View',
        desc : 'The LabVIEW programming environment simplifies hardware integration for engineering applications so that you have a consistent way to acquire data from NI and third-party hardware. LabVIEW reduces the complexity of programming, so you can focus on your unique engineering problem. LabVIEW enables you to immediately visualize results with built-in, drag-and-drop engineering user interface creation and integrated data viewers. To turn your acquired data into real business results, you can develop algorithms for data analysis and advanced control with included math and signal processing IP or reuse your own libraries from a variety of tools. To ensure compatibility with other engineering tools, LabVIEW can interoperate with, and reuse libraries from, other software and open-source languages.',
        img : labview
    },
    
    
];


function Facilities() {
    return (
        <Box className="facilities" marginTop={'3rem'} >
            <Typography variant="h4" className="sub-heading">Facilities </Typography>
            <TableContainer component={Paper} sx={{ maxHeight: 440 }} >
                <Table sx={{ minWidth: 650 }} stickyHeader aria-label="sticky table" bgcolor='#F3FFFF'>
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                <Typography variant="body1">Name</Typography>
                            </TableCell>
                            <TableCell align="center">
                            <Typography variant="body1">Description</Typography>
                            </TableCell>
                            <TableCell align="right">
                                <Typography variant="body1">Instruments/Softwares</Typography>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="justify">{row.desc}</TableCell>
                                <TableCell align="right"><img  width={'250px'} src={row.img} alt={row.name}/></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            
        </Box>
    )
}

export default Facilities
//Cadence, Synopsis, Mentor Graphics, Vivado